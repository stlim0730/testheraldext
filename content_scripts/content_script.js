function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  (document.head || document.documentElement).appendChild(s);
}

// Printing jQuery version
if (typeof jQuery != 'undefined') {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info('no jQuery');
}

$(document).ready(function () {
  var port = chrome.runtime.connect({name: 'contentPort'});

  port.postMessage({
    sender: 'content',
    receiver: 'background',
    event: 'init',
    target: ''
  });

  port.onMessage.addListener(function (msg) {
    console.info(msg);

    if (msg.event === 'check' && msg.target === 'optimizely') {
      // see if there is optimizely object
      console.info(msg.event, window.optimizely);
    }
    else if (msg.event === 'eval') {
      eval(msg.target);
    }
    else if (msg.event === 'inject') {
      console.info(msg.target);

      injectScript(
        chrome.extension.getURL(msg.target[0]),
        msg.target[1]
      );
    }
  });
});
