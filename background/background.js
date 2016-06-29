// Print jQuery version
if (typeof jQuery != "undefined") {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info("no jQuery");
}

chrome.runtime.onConnect.addListener(function (port) {
  console.info(port, "connected");

  port.onMessage.addListener(function (msg) {
    console.info(msg);

    if (msg.sender === "content") {

      if (msg.event === "init") {
        // the content script is ready
        
        // injection begins
        port.postMessage({
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
        var optimizely = JSON.parse(msg.target);
        console.info(msg.event + ":", optimizely);

        // Get the active tab ID and run page action
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var tabId = tabs[0].id;
          console.info("tabId:", tabId);
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
        });
      }
    }
    else {
      // do nothing
    }
  });
});
