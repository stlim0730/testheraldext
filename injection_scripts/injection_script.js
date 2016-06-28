// console.info("the injection code is running!");

// Print jQuery version
if (typeof jQuery != "undefined") {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info("no jQuery");
}

if (window["optimizely"]) {
  console.info("found optimizely:", window["optimizely"]);

  var foundMsg = {
    sender: "injection",
    receiver: "background",
    event: "found optimizely",
    target: JSON.stringify(window["optimizely"]) // Message event doesn't seem to be good at nested objects; serialize them
  };

  window.postMessage(foundMsg, "*");
}
else {
  console.info("There is no optimizely.");
}
