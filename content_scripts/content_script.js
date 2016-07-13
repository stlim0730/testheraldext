var tab = null;
var test = 'testtest';

(function() {
  console.log('started:', 'content');

  //
  // Globals
  //

  var tabName = btoa(new Date());

  var injectScriptFile = function (file, node) {
    // var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    (document.head || document.documentElement).appendChild(s);
  }

  var injectInlineScript = function (code, node) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.innerHTML = code;
    (document.head || document.documentElement).appendChild(s);
  }

  //
  // Start
  //



  // // Print jQuery version
  // if (typeof jQuery != "undefined") {  
  //   // jQuery is loaded => print the version
  //   console.info("jQuery found:", jQuery.fn.jquery);
  // }
  // else {
  //   console.info("no jQuery");
  // }


  
  var port = chrome.extension.connect();
  port.postMessage({
    sender: 'content' + tabName,
    receiver: 'background',
    event: 'init',
    target: tabName
  });

  port.onMessage.addListener(function (msg) {
    console.log('received a message:', msg);

    switch(msg.sender) {

      case 'background':

        switch(msg.event) {
          
          case 'init-feedback':
            tab = new Tab({
              name: tabName,
              tabId: msg.target
            });
            injectScriptFile(
              chrome.extension.getURL('injection_scripts/detector.js'),
              msg.target.body
            );
            injectScriptFile(
              chrome.extension.getURL('common/jquery-2.2.4.min.js'),
              msg.target.body
            );
            break;

          case 'highlight':
            var currentHeadline = msg.target.currentHeadline;
            // TODO: temporary currentHeadline in debugging mode
            var siteConfig = msg.target.siteConfig;
            var headline = null;
            var index = -1;
            for(var _index in siteConfig.headlineSelector) {
              headline = $(siteConfig.headlineSelector[_index] + ':contains(' + currentHeadline + ')')[0];
              if(headline) {
                index = _index; // index of the corresponding wrapper class
                break;
              }
            }
            if(headline) {
              console.info(headline);
              $(headline).addClass('headline-being-tested-current');
              var wrapper = $(headline).closest(siteConfig.headlineWrapper[index]);
              $(wrapper).addClass('headline-wrapper-highlight');

              // Scroll ###GIVES ME ERRORS!!!
              var offset = $(wrapper).offset().top - siteConfig.scrollTopMargin;
              var scrollScript = '$("body").animate({scrollTop: ' + offset + '}, 400);';
              injectInlineScript(scrollScript, 'body');

              // Highlight
              var highlightScript = '$(".headline-wrapper-highlight").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);';
              injectInlineScript(highlightScript, 'body');

              // Overlay: too complicated; security issues with iframe injection
              // ...
              // ...
            }
            break;
        }

      break;
    }
  });

  // Add an additional message handler (native) that passes messages from injection to background
  window.addEventListener('message', function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
      return true;

    // Bypass the message received
    if (event.data.sender === 'injection'
      && event.data.receiver === 'content') {
      var optimizely = JSON.parse(event.data.target);
      console.info('injection script found optimizely:', optimizely);

      port.postMessage({
        sender: 'content' + tabName,
        receiver: 'background',
        event: event.data.event,
        target: {
          tabId: tab.get('tabId'),
          optimizely: optimizely
        }
      });
    }
  }, false);

})();
