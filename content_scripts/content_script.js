var tab = null;
var test = 'testtest';

(function() {
  console.log('started:', 'content');

  //
  // Globals
  //

  var tabName = btoa(new Date());

  var injectScriptFile = function (file) {
    // var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    (document.head || document.documentElement).appendChild(s);
  }

  var injectInlineScript = function (code) {
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
              chrome.extension.getURL('injection_scripts/detector.js')
            );
            break;

          case 'inject jquery':
            injectScriptFile(
              chrome.extension.getURL('common/jquery-2.2.4.min.js')
            );
            break;

          case 'highlight':
            var code = msg.target.code;
            // NYP
            // "code": "$(\"h1 > .postid-10288075, h3.postid-10288075, h2.postid-10288075\").text(\"This girl wondered what would happen if she put her cats in a backpack\");",
            // NYT
            // "code": "/*_optimizely_evaluate=force */ \nwindow.runComplexABTest( 100000004559755, 'false', 'false', '', '', '100000004530881_1468852972496' );\n/*_optimizely_evaluate=safe */",
            // code = "/*_optimizely_evaluate=force */ \nwindow.runComplexABTest( 100000004559755, 'false', 'false', '', '', '100000004530881_1468852972496' );\n/*_optimizely_evaluate=safe */";
            var siteConfig = msg.target.siteConfig;
            var identifier = code.match(new RegExp(siteConfig.selectorExtractRegex))[0];
            if(siteConfig.selectorPrefix != '') {
              identifier = identifier.replace(siteConfig.selectorPrefix, '').trim();
            }
            var headlineOnPage = null;
            var tagged = false;
            var wrapper = null;
            for(var tagIndex in siteConfig.headlineTags) {
              headlineOnPage = $(siteConfig.headlineTags[tagIndex] + '[' + siteConfig.selectorAttr + '=' + identifier + ']');
              if(headlineOnPage) {
                // console.info(headlineOnPage);
                for(var wrapperIndex in siteConfig.headlineWrapper) {
                  wrapper = $(headlineOnPage).closest(siteConfig.headlineWrapper[wrapperIndex]);
                  if(wrapper) {
                    $(wrapper).addClass('headline-wrapper-highlight');
                    tagged = true;
                  }
                  if(tagged) break;
                }
              }
              if(tagged) break;
            }
            if(tagged) {
              // Scroll
              var offset = $(wrapper).offset().top - siteConfig.scrollTopMargin;
              var scrollScript = '$("body").animate({scrollTop: ' + offset + '}, 400);';
              injectInlineScript(scrollScript, 'body');

              // Border
              $(wrapper).css('border', 'solid red 3px');

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
