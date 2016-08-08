var app = {};

(function() {
  console.log('started:', 'background');

  //
  // Globals
  //

  app.tabs = {};
  app.ports = {};
  app.ports.content = {};
  // app.ports.injection = {};

  //
  // Start
  //

  chrome.runtime.onConnect.addListener(function(port) {
    console.log('connected:', port);

    port.onMessage.addListener(function(msg) {
      console.log('received a message:', msg);

      if(msg.sender && msg.sender.startsWith('content')) {
        app.ports.content[msg.sender] = port;
      }
      // else if(msg.sender && msg.sender.startsWith('injection')) {
      //   app.ports.injection[msg.sender] = port;
      // }
      else {
        app.ports[msg.sender] = port;
      }

      switch(msg.sender) {

        case 'sandbox':
          
          switch(msg.event) {
            
            case 'init':
              app.ports.sandbox.postMessage({
                sender: 'background',
                receiver: 'sandbox',
                event: 'init-feedback',
                target: ''
              });
              break;

            case 'rendered in sandbox':
              if(app.ports.popup) {
                app.ports.popup.postMessage({
                  sender: 'background',
                  receiver: 'popup',
                  event: msg.event,
                  target: {
                    results: msg.target.results,
                    count: msg.target.count,
                    url: msg.target.url,
                    isUsingPrePopulated: msg.target.isUsingPrePopulated
                  }
                });
              }
              break;
          }
          break;
        
        // case 'injection':
          
        //   switch(msg.event) {

        //     case 'init':
        //       //
        //       break;
        //   }

        //   break;

        case 'popup':
          
          switch(msg.event) {

            case 'init':
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if(tabs.length == 0) return; // It happens when 'Inspect Popup'
                var tabId = tabs[0].id;
                var url = tabs[0].url;
                var activeExperiments = app.tabs[tabId].getActiveExperiments();
                var isUsingPrePopulated = app.tabs[tabId].processor.get('isUsingPrePopulated');

                app.ports.sandbox.postMessage({
                  sender: 'background',
                  receiver: 'sandbox',
                  event: 'render in sandbox',
                  target: {
                    templateName: 'experiment',
                    count: activeExperiments.length,
                    url: url,
                    context: {
                      activeExperiments: activeExperiments
                    },
                    isUsingPrePopulated: isUsingPrePopulated
                  }
                });
              });
              break;

            case 'highlight':
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if(tabs.length == 0) return; // It happens when 'Inspect Popup'
                var tabId = tabs[0].id;
                var tab = app.tabs[tabId];
                var tabName = tab.get('name');

                var headline = msg.target.currentHeadline;
                var activeExperiments = app.tabs[tabId].getActiveExperiments();
                var code = null;
                var found = false;

                for(var aeIndex in activeExperiments) {
                  var ae = activeExperiments[aeIndex];
                  for(var vaIndex in ae.variations) {
                    var va = ae.variations[vaIndex];
                    if(va.headline == headline || found) {
                      found = true;
                      if(va.code) code = va.code;
                    }
                  }

                  if(code) break;
                }

                app.ports.content['content' + tabName].postMessage({
                  sender: 'background',
                  receiver: 'content' + tabName,
                  event: 'highlight',
                  target: {
                    siteConfig: msg.target.siteConfig,
                    code: code
                  }
                });
              });
              break;
          }

          break;

        default:
          
          if(msg.sender.startsWith('content')) {
            switch(msg.event) {
              
              case 'init':
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                  if(tabs.length == 0) return; // It happens when 'Inspect Popup'
                  var tabId = tabs[0].id;
                  var tab = new Tab({
                    name: msg.target,
                    tabId: tabId
                  });
                  app.tabs[tabId] = tab;
                  port.name = msg.target;//TODO: deal with disconnect
                  app.ports.content[msg.sender].postMessage({
                    sender: 'background',
                    receiver: msg.sender,
                    event: 'init-feedback',
                    target: tabId
                  });
                });
                break;

              case 'caught xhr':
                console.log(msg.event, msg.target);
                break;

              case 'found optimizely':
                var tabId = msg.target.tabId;
                // Process optimizely data
                app.tabs[tabId].processor.set('isFound', true);
                app.tabs[tabId].processor.optimizely = msg.target.optimizely;
                app.tabs[tabId].processor.setActiveExperiments();
                var isUsingPrePopulated = app.tabs[tabId].processor.get('isUsingPrePopulated');
                console.log('isUsingPrePopulated:', isUsingPrePopulated);
                console.log('optimizely:', app.tabs[tabId].processor.optimizely);
                console.log('activeExperiments:', app.tabs[tabId].processor.activeExperiments);
                var actExCnt = app.tabs[tabId].processor.activeExperiments.length;
                if(actExCnt > 0) {
                  var notiTitle = null;
                  if(actExCnt == 1) {
                    notiTitle = 'This website now has 1 headline testing.';
                  }
                  else {
                    notiTitle = 'This website now has ' + actExCnt + ' headline testings.';
                  }
                  
                  // Activate desktop notification
                  var notification_opt = {
                    type: 'basic',
                    title: notiTitle,
                    message: 'Click the extension icon to find out more.',
                    iconUrl: '../ui/images/icon38.png'
                  };
                  chrome.notifications.create('notification for ' + msg.event, notification_opt, function (notiId) {
                    console.info('notiId:', notiId);
                  });
                  // Change the icon
                  chrome.pageAction.show(tabId);
                  // Change the tooltip
                  chrome.pageAction.setTitle({
                    tabId: tabId,
                    title: notiTitle
                  });
                  // Inject jQuery for this specific page
                  var tabName = app.tabs[tabId].get('name');
                  app.ports.content['content' + tabName].postMessage({
                    sender: 'background',
                    receiver: 'content' + tabName,
                    event: 'inject jquery',
                    target: ''
                  });
                }
                break;
            }
          }

          break;
      }
    });


    port.onDisconnect.addListener(function(port) {
      var disconnector = null;

      if(port.sender.url.endsWith('popup.html')) {
        // Do nothing
        disconnector = 'popup';
      }
      else if (port.sender.tab) {
        var tabId = port.sender.tab.id;
        var portName = 'content' + port.name;
        disconnector = 'port: ' + port.name + 'tab: ' + tabId;
        app.ports.content[portName] = null
        app.tabs[tabId] = null;

        delete app.ports[portName];
        delete app.tabs[tabId];
      }
      else {
        console.log('I don\'t know what has been disconnected.');
      }

      console.log('disconnected:', disconnector, port);
    });


  });



})();