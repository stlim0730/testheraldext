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
          // Change the icon
          chrome.pageAction.show(tabId);
          // Change the tooltip
          chrome.pageAction.setTitle({
            tabId: tabId,
            title: "This page has Optimizely."
          });
        });
      }
    }
    else {
      // do nothing
    }
  });
});
