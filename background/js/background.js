var connections = {
  content: [],
  injection: [],
  popup: false,
  sandbox: false
};

var ports = {};

var optimizely = null;

// Print jQuery version
if (typeof jQuery != "undefined") {  
  // jQuery is loaded => print the version
  console.info("jQuery found:", jQuery.fn.jquery);
}
else {
  console.info("no jQuery");
}

chrome.runtime.onConnect.addListener(function (port) {
  console.info(port, "connected");

  port.onMessage.addListener(function (msg) {

    console.info(msg);

    if ("sender" in msg) ports[msg.sender] = port;

    if (msg.sender === "content") {

      if (msg.event === "init") {
        // the content script is ready
        
        // injection begins
        ports["content"].postMessage({
          sender: "background",
          receiver: "content",
          event: "inject",
          target: {
            file: "injection_scripts/injection_script.js",
            elem: "body"
          }
        });
      }

    }
    else if (msg.sender === "injection") {
      
      if (msg.event === "found optimizely") {
        optimizely = JSON.parse(msg.target);
        console.info(msg.event + ":", optimizely);

        // Get the active tab ID and run page action
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var tabId = tabs[0].id;
          console.info("tabId:", tabId);
          connections["content"].push(tabId);
          connections["injection"].push(tabId);
          // Change the icon
          chrome.pageAction.show(tabId);
          // Change the tooltip
          chrome.pageAction.setTitle({
            tabId: tabId,
            title: "This page has Optimizely."
          });
          // Activate desktop notification
          var notification_opt = {
            type: "basic",
            title: "This page is experimenting on headlines.",
            message: "Click the extension icon to find out more.",
            iconUrl: "../ui/images/icon38.png"
          };
          chrome.notifications.create("notification for " + msg.event, notification_opt, function (notiId) {
            console.info("notiId:", notiId);
          });
          // Pass Optimizely to popup, if possible
          if (ports["popup"]) {
            console.info("passing optimizely to popup: popup port exists.");
            ports["popup"].postMessage({
              sender: "background",
              receiver: "popup",
              event: msg.event,
              target: msg.target
            });
          }
        });
      }
    }
    else if (msg.sender === "popup") {
      
      if (msg.event === "init") {
        connections["popup"] = true;

        if(optimizely) {
          console.info("passing optimizely to popup: optimizely exists.");
          ports["popup"].postMessage({
            sender: "background",
            receiver: "popup",
            event: "found optimizely",
            target: JSON.stringify(optimizely)
          });
        }
      }
      else if (msg.event === "sandbox render") {
        // Because sandbox is not connected to port yet
        document.getElementById("sandbox").contentWindow.postMessage({
          sender: "background",
          receiver: "sandbox",
          event: msg.event,
          target: msg.target
        }, "*");
      }
    }
    else if (msg.sender === "sandbox") {
      connections["sandbox"] = true;

      if (msg.event === "sandbox rendered") {
        
        ports["popup"].postMessage({
          sender: "background",
          receiver: "popup",
          event: msg.event,
          target: msg.target
        });
      }
    }
    else {
      // do nothing
    }
  });

  console.info(connections);
});

chrome.tabs.onRemoved.addListener(function (closingTabId, removeInfo) {

});
