var injectScript = function (file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", file);
  (document.head || document.documentElement).appendChild(s);
}

// Print jQuery version
if (typeof jQuery != "undefined") {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info("no jQuery");
}

var port = chrome.runtime.connect();

// Add a message handler that passes messages from injection to background
window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  // Bypass the message received
  if (event.data.sender === "injection"
    && event.data.receiver === "background") {
    console.info("[injection->content->background]", event.data);
    port.postMessage(event.data);
  }
}, false);

// Start
$(document).ready(function () {
  port.postMessage({
    sender: "content",
    receiver: "background",
    event: "init",
    target: ""
  });

  port.onMessage.addListener(function (msg) {
    console.info(msg);

    if (msg.event === "inject") {
      console.info(msg.target);

      injectScript(
        chrome.extension.getURL(msg.target["file"]),
        msg.target["elem"]
      );
    }
  });
});
// End
