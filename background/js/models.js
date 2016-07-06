var Detector = Backbone.Model.extend({
  defaults: {
    optimizely: null,
    tabId: null,
    isFound: false
  },

  find: function() {
    if(window.optimizely) {
      this.optimizely = JSON.parse(JSON.stringify(window.optimizely));
      return true;
    }
    else {
      return false;
    }
  },

  isFound: function() {
    if(this.optimizely) {
      return true;
    }
    else {
      return false;
    }
  }
});



var Messenger = Backbone.Model.extend({
  defaults: {
    name: null,
    tabId: null,
    ports: {},
    handlers: {}
  },

  addPort: function(portName, port) {
    ports[portName] = port;
  },

  removePort: function(portName) {
    if(portName in ports) {
      ports[portName] = null;
      delete ports[portName];
    }
  },

  send: function(receiver, message) {
    var port = ports[receiver];
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
    handlers[eventName] = handlerFunc;
    // TODO: real binding between events and handlers?
  }
});



var SandboxRenderer = Backbone.Model.extend({
  defaults: {
    sandboxElem: null,
    sources: {},
    templates: {}
  },

  _setTemplate: function(templateName, compileFunc) {
    templates[templateName] = compileFunc(source);
    // templates[templateName] = Handlebars.compile(source);
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
    messenger: new Messenger({name: this.name, tabId: this.tabId}),
    detector: new Detector({tabId: this.tabId})
  }
});
