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
            break;

          case 'highlight':
            injectScriptFile(
              chrome.extension.getURL('common/jquery-2.2.4.min.js'),
              'body'
            );
            console.log($);
            var currentHeadline = msg.target.currentHeadline;
            currentHeadline = 'I got caught cheating through Pokémon Go';
            var siteConfig = msg.target.siteConfig;
            var headline = $(siteConfig.headlineSelector + ':contains(' + currentHeadline + ')');
            if(headline.length > 0) {
              headline = headline[0];
              $(headline).addClass('headline-being-tested-current');
              var wrapper = $(headline).closest(siteConfig.headlineWrapper);
              $(wrapper).addClass('headline-wrapper-highlight');
              
              // Scroll
              var offset = $(wrapper).offset().top;
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
