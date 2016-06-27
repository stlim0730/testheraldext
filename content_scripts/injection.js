console.info("the test injection is running!");
console.info(window.optimizely);

// var port = chrome.runtime.connect({name: "contentPort"});
// window.postMessage({
//   sender: "injection",
//   receiver: "background",
//   event: "found optimizely",
//   target: window["optimizely"]
// }, "*");

chrome.runtime.sendMessage({
  sender: "injection",
  receiver: "background",
  event: "found optimizely",
  target: JSON.stringify(window["optimizely"])
});
