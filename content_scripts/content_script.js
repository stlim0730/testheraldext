// var gport = null;

// chrome.runtime.onConnect.addListener(function connectListener(port) {
//   gport = port;
//   console.log('CONNECTED', port.name);

//   // chrome.runtime.onConnect.removeListener(connectListener);
//   // console.assert(port.name == 'optimisely');
//   port.onMessage.addListener(function (msg) {
    
//     if(msg.state === 'init') {
//       injectScript( chrome.extension.getURL('optimisely-sniffer.js'), 'body');
//       window.addEventListener('message', injectedMessageHandler, false);
//       port.postMessage({state: 'doing it'});
//     }
//     else if(msg.state == 'eval') {
//       console.log(msg.id);
//       // var msg ={type:'variation',data: optimizely['allExperiments']};
//       window.postMessage(msg, '*');
//     }

//   });

//   port.onDisconnect.removeListener(function(){
//     console.log('removing listener'); 
//     window.removeEventListener('message',injectedMessageHandler,false);
//   })
// });

// function injectScript(file, node) {
//   var th = document.getElementsByTagName(node)[0];
//   var s = document.createElement('script');
//   s.setAttribute('type', 'text/javascript');
//   s.setAttribute('src', file);
//   (document.head||document.documentElement).appendChild(s);
// }

// // function onConnectListener()

// function injectedMessageHandler(event) {
//   // console.log(event.data);
//   if(gport === null) console.log('No active port');

//   if(event.data.type === 'no-optimisely') {
//     gport.postMessage({state: 'no-optimisely'});
//   }
//   else if(event.data.type === 'variation') {
//     console.log('I am here');
//     gport.postMessage({state: event.data.type,experiments:event.data.experiments,variations:event.data.variations});
//     console.log(JSON.stringify(event.data.experiments));
//     console.log(JSON.stringify(event.data.variations));
//   }
// }




// Printing jQuery version
if (typeof jQuery != 'undefined') {  
  // jQuery is loaded => print the version
  console.info(jQuery.fn.jquery);
}
else {
  console.info('no jQuery');
}

// // Examine scripts
// var scripts = $('script');
// var scriptUrls = [];
// for (var i = 0; i < scripts.length; i++) {
//   var scriptElem = scripts[i];
//   if ('src' in scriptElem) {
//     // external script
//     var url = $(scriptElem).prop('src');
//     if (url.includes('optimizely')) {
//       // suspicious
//       scriptUrls.push(url);
//       console.info(url);
//     }
//   }
//   else {
//     // script element is not empty; embedded script
//     // pass
//   }
// }

// if (scriptUrls.length > 0) {
//   if (window) {
//     // attach a detector
//     // $(document).ajaxStart(function(){
//     //   console.info('ajaxStart');
//     // });

//     // $(document).ajaxStop(function(){
//     //   console.info('ajaxStop');
//     // });

//     // $(document).ajaxSuccess(function (event, request, settings) {
//     //   console.info('ajaxSuccess');
//     //   console.info(event, request, settings);
//     // });

//     // $(document).ajaxComplete(function (event, request, settings) {
//     //   console.info('ajaxComplete');
//     //   console.info(event, request, settings);
//     // });

//     // console.info(window.hasOwnProperty('optimizely'));
//   }
//   else {
//     console.info('no window obj found.');
//   }
// }

// Connect to extension background
var port = chrome.runtime.connect({name: 'contentPort'});
port.postMessage({
  sender: 'content',
  receiver: 'background',
  event: 'init',
  target: ''
});
port.onMessage.addListener(function (msg) {
  // do something
  if (msg) {
    //
  }

  // actual logging happens only here
  // if (msg.event === 'log') {
    console.info('[' + msg.sender + '->' + msg.receiver + ']', msg.event, msg.target);
  // }
});

// $(document).bind('DOMSubtreeModified', function(e) {
//   console.info(e.target, e.relatedTarget, e.which, e.metaKey);
// });

// // Ajax complete detector
// // $(window).ajaxComplete(function() {
// //   alert('content has just been changed, you should change href tag again');
// // });
