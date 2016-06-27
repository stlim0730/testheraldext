// window.addEventListener("load", function () {
//   // console.log(window.hasOwnProperty("optimizely"));

// }, false);
if (typeof jQuery != 'undefined') {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info('no jQuery');
}

chrome.runtime.onConnect.addListener(function (port) {
  console.info(port, 'connected');
  
  port.onMessage.addListener(function (msg) {
    console.info(msg);

    if (msg.event === 'init') {
      // the content script is ready
      
      // port.postMessage({
      //   sender: 'background',
      //   receiver: 'content',
      //   event: 'check',
      //   target: 'optimizely'
      // });

      // port.postMessage({
      //   sender: 'background',
      //   receiver: 'content',
      //   event: 'eval',
      //   target: 'console.info(window.optimizely);'
      // });

      port.postMessage({
        sender: 'background',
        receiver: 'content',
        event: 'inject',
        target: ['content_scripts/injection.js', 'body']
      });
    }
    else if (msg.event === 'found optimizely') {
      var optimizely = msg.target;
      console.info(optimizely);
    }
  });
});
