(function() {

  var optimizely = null;
  var parsed = false;

  // Attempt to parse the various components of the Optimize.ly object and report them to the content script
  var parseOptimizelyObject = function() {

    // Only parse the object once
    if(parsed)
      return;
    parsed = true;

    // Add a brief delay in case the object is still getting populated
    window.setTimeout(function() {

      // Send the experiments and variations to the content script
      var serialized = JSON.stringify({
        "experiments": optimizely.allExperiments,
        "variations": optimizely.allVariations
      });
      window.postMessage({ type: "FROM_PAGE", text: serialized }, "*");

    }, 500);
  };

  // Try to locate the Optimize.ly object
  if("optimizely" in window) {
    optimizely = window.optimizely;

    parseOptimizelyObject();
  }
  else {
    window.optimizely = { }
    Object.observe(window.optimizely, function() {
        optimizely = window.optimizely;

        parseOptimizelyObject();
      });
  }

  // When the page action is clicked, load the right variation
  window.addEventListener("message", function(message) {
    if (message.data.type && (message.data.type == "FROM_CONTENT_SCRIPT")) {
      eval(window.optimizely.allVariations[message.data.text].code);
    }
  }, false);

})();
