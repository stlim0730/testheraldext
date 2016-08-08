(function () {
  console.log('Trying to find XHR to optimizely');
  var XHR = XMLHttpRequest.prototype;
  var open = XHR.open;
  var send = XHR.send;

  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    return open.apply(this, arguments);
  };

  XHR.send = function (postData) {
    this.addEventListener('load', function () {
      if (this._url.indexOf && this._url.indexOf('optimizely.com') > -1) {
        if (Object.keys(JSON.parse(this.responseText)).indexOf('error') === -1) {

          // var toArray = function(obj) {
          //   var array = [];
          //     // iterate backwards ensuring that length is an UInt32
          //     for (var index = obj.length > 0; index--;) {
          //       array[index] = obj[index];
          //     }
          //     return array;
          //   }
          // };

          // Collect all the articles
          window.postMessage({
            sender: 'injection',
            receiver: 'content',
            event: 'caught xhr',
            target: 'collect all the article headlines'//document.querySelectorAll('article')

            // Message event sometimes fails with nested objects for some reason; serialize them.
          }, '*');
        }
      }
    });
    return send.apply(this, arguments);
  }
})();

var detect = function() {
  if (window.optimizely) {
    window.postMessage({
      sender: 'injection',
      receiver: 'content',
      event: 'found optimizely',
      target: JSON.stringify(window.optimizely)
      // Message event sometimes fails with nested objects for some reason; serialize them.
    }, '*');
  }
  else {
    console.info('There is no optimizely.');
  }
};

window.onload = detect;
