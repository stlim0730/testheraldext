(function () {
  "use-strict";
  // TODO: Controller
  // function handler(event) {
  //   if (event.data.config) {
  //     console.log("Received config");
  //   }
  // }

  var XHR = XMLHttpRequest.prototype;
  var open = XHR.open;
  var send = XHR.send;

  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    return open.apply(this, arguments);
  };

  XHR.send = function (postData) {
    this.addEventListener("load", function () {
      var method = this._method;
      var url = this._url;
      var msg = {method: method, url: url};
      msg.responseText = this.responseText || "";
      // msg.postData = this.postData || "";
      if (msg) {
        window.postMessage(JSON.parse(JSON.stringify(msg)), "*");
      }
    });

    return send.apply(this, arguments);
  };
}());
