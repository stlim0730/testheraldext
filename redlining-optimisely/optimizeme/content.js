// Inject the page script
var scriptTag = document.createElement("script");
scriptTag.src = chrome.extension.getURL("page.js");
(document.head || document.documentElement).appendChild(scriptTag);

var variations = null;
var variationIDs = [ ];

// Receive Optimize.ly data from the page script, process it, and pass it to the background script
window.addEventListener("message", function(event) {
  if(event.source != window)
    return;
  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    variations = JSON.parse(event.data.text).variations;
    for (id in variations)
      if ("code" in variations[id])
        variationIDs.push(id)

    // Shuffle the variations, since otherwise redirects can prevent seeing all variations
    var shuffle = function(o) {
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
    shuffle(variationIDs);

    // Only pass along to the background script if there are variations
    if(variations != null && variationIDs.length > 0)
      chrome.runtime.sendMessage(event.data.text);
  }
});

var variation = 0;

// Receive clicks from the page action and advance the variations
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (variations == null || variationIDs.length == 0)
      return;

    // Activate the next variation
    window.postMessage({ type: "FROM_CONTENT_SCRIPT", text: variationIDs[variation].toString() }, "*");

    variation = ( variation + 1 ) % variationIDs.length;
  });
