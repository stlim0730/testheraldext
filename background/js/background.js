// var connections = {
//   content: [],
//   injection: [],
//   popup: false,
//   sandbox: false
// };

// var ports = {};

// var optimizely = null;

// chrome.runtime.onConnect.addListener(function (port) {
//   console.info(port, "connected");

//   port.onMessage.addListener(function (msg) {

//     console.info(msg);

//     if ("sender" in msg) ports[msg.sender] = port;

//     if (msg.sender === "content") {

//       if (msg.event === "init") {
//         // the content script is ready
        
//         // injection begins
//         ports["content"].postMessage({
//           sender: "background",
//           receiver: "content",
//           event: "inject",
//           target: {
//             file: "injection_scripts/injection_script.js",
//             elem: "body"
//           }
//         });
//       }

//     }
//     else if (msg.sender === "injection") {
      
//       if (msg.event === "found optimizely") {
//         optimizely = JSON.parse(msg.target);
//         console.info(msg.event + ":", optimizely);

//         // Get the active tab ID and run page action
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//           var tabId = tabs[0].id;
//           console.info("tabId:", tabId);
//           connections["content"].push(tabId);
//           connections["injection"].push(tabId);
//           // Change the icon
//           chrome.pageAction.show(tabId);
//           // Change the tooltip
//           chrome.pageAction.setTitle({
//             tabId: tabId,
//             title: "This page has Optimizely."
//           });
//           // Activate desktop notification
//           var notification_opt = {
//             type: "basic",
//             title: "This page is experimenting on headlines.",
//             message: "Click the extension icon to find out more.",
//             iconUrl: "../ui/images/icon38.png"
//           };
//           chrome.notifications.create("notification for " + msg.event, notification_opt, function (notiId) {
//             console.info("notiId:", notiId);
//           });
//           // Pass Optimizely to popup, if possible
//           if (ports["popup"]) {
//             console.info("passing optimizely to popup: popup port exists.");
//             ports["popup"].postMessage({
//               sender: "background",
//               receiver: "popup",
//               event: msg.event,
//               target: msg.target
//             });
//           }
//         });
//       }
//     }
//     else if (msg.sender === "popup") {
      
//       if (msg.event === "init") {
//         connections["popup"] = true;

//         if(optimizely) {
//           console.info("passing optimizely to popup: optimizely exists.");
//           ports["popup"].postMessage({
//             sender: "background",
//             receiver: "popup",
//             event: "found optimizely",
//             target: JSON.stringify(optimizely)
//           });
//         }
//       }
//       else if (msg.event === "sandbox render") {
//         // Because sandbox is not connected to port yet
//         document.getElementById("sandbox").contentWindow.postMessage({
//           sender: "background",
//           receiver: "sandbox",
//           event: msg.event,
//           target: msg.target
//         }, "*");
//       }
//     }
//     else if (msg.sender === "sandbox") {
//       connections["sandbox"] = true;

//       if (msg.event === "sandbox rendered") {
        
//         ports["popup"].postMessage({
//           sender: "background",
//           receiver: "popup",
//           event: msg.event,
//           target: msg.target
//         });
//       }
//     }
//     else {
//       // do nothing
//     }
//   });

//   console.info(connections);
// });

// chrome.tabs.onRemoved.addListener(function (closingTabId, removeInfo) {

// });
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

  chrome.runtime.onConnect.addListener(function (port) {
    console.log('connected:', port);

    port.onMessage.addListener(function (msg) {
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
              if (app.ports.popup) {
                app.ports.popup.postMessage({
                  sender: 'background',
                  receiver: 'popup',
                  event: msg.event,
                  target: {
                    results: msg.target.results,
                    count: msg.target.count,
                    url: msg.target.url
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
                    }
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
                  var tabId = tabs[0].id;
                  var tab = new Tab({
                    name: msg.target,
                    tabId: tabId
                  });
                  app.tabs[tabId] = tab;
                  app.ports.content[msg.sender].postMessage({
                    sender: 'background',
                    receiver: msg.sender,
                    event: 'init-feedback',
                    target: tabId
                  });
                });
                break;

              case 'found optimizely':
                var tabId = msg.target.tabId;
                // Process optimizely data
                app.tabs[tabId].processor.set('isFound', true);
                app.tabs[tabId].processor.optimizely = msg.target.optimizely;
                app.tabs[tabId].processor.setActiveExperiments();
                console.log('isUsingPrePopulated:', app.tabs[tabId].processor.get('isUsingPrePopulated'));
                console.log('optimizely:', app.tabs[tabId].processor.optimizely);
                console.log('activeExperiments:', app.tabs[tabId].processor.activeExperiments);
                // Activate desktop notification
                var notification_opt = {
                  type: 'basic',
                  title: 'This page is experimenting on headlines.',
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
                  title: 'This page has Optimizely.'
                });
                break;
            }
          }

          break;
      }
    });
  });

})();
