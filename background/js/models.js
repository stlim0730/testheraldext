var Detector = Backbone.Model.extend({
  defaults: {
    tabId: null,
    isFound: false
  },

  constructor: function(attr, opt) {
    this.optimizely = null;

    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attr, opt) {
    console.log('initialized', 'Detector', this);

    this.on('change:isFound', function() {
      console.log('change', 'isFound', this);
    });
  },

  find: function() {
    if(window.optimizely) {
      this.optimizely = JSON.parse(JSON.stringify(window.optimizely));
      isFound = true;
      // return true;
    }
    else {
      isFound = false;
      // return false;
    }
  }
});



var Messenger = Backbone.Model.extend({
  defaults: {
    name: null,
    tabId: null,
    connected: false
  },

  constructor: function(attr, opt) {
    this.ports = null;
    this.handlers = null;

    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attr, opt) {
    console.log('initialized', 'Messenger', this);

    this.on('change:connected', function() {
      console.log('change', 'connected', this);
    });
  },

  addPort: function(portName, port) {
    this.ports[portName] = port;
  },

  removePort: function(portName) {
    if(portName in this.ports) {
      this.ports[portName] = null;
      delete this.ports[portName];
    }
  },

  send: function(receiver, message) {
    var port = this.ports[receiver];
    if(port && port.postMessage) {
      port.postMessage({
        sender: this.name,
        receiver: receiver,
        content: msg
      });
    }
    else {
      console.error('cannot send a message to', receiver);
    }
  },

  addMessageHandler: function(eventName, handlerFunc) {
    this.handlers[eventName] = handlerFunc;
    // TODO: real binding between events and handlers?
  }
});



var SandboxRenderer = Backbone.Model.extend({
  defaults: {
    sandboxElem: null
  },

  constructor: function(attr, opt) {
    this.sources = {};
    this.templates = {};

    Backbone.Model.apply(this, arguments);
  },

  _setTemplate: function(templateName, compileFunc) {
    templates[templateName] = compileFunc(source);
    //e.g., templates[templateName] = Handlebars.compile(source);
  },

  setSource: function(sourceName, sourceElemId) {
    sources[sourceName] = $('#' + sourceElemId).html();
  },

  renderInSandbox: function(sourceName, templateName, context) {
    var source = sources[sourceName];
    if(!source) {
      console.error('cannot find the source. setSource before render.', sourceName);
      return '';
    }
    if(!templateName in templates) {
      _setTemplate(templateName);
    }
    return templates[templateName](context);
  }
});



var Tab = Backbone.Model.extend({
  defaults: {
    tabId: null,
    name: null,
    isOpen: true
  },

  constructor: function(attr, opt) {
    this.messenger = new Messenger(attr);
    this.detector = new Detector(attr);

    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attr, opt) {
    console.log('initialized', 'Tab', this);

    this.on('change:isOpen', function() {
      console.log('change', 'isOpen', this);
    });
  }
});
