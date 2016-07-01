var port = chrome.runtime.connect();

window.addEventListener("message", function (msg) {
  // if (msg.data.receiver !== "sandbox") return true;

  console.info(msg.data);

  if (msg.data.sender === "background") {
    if (msg.data.event === "sandbox render") {
      var results = "";
      var source = $("#experiment-template").html();
      var template = {};
      template["experiment"] = Handlebars.compile(source);
      var contexts = JSON.parse(msg.data.target);

      for (var index in contexts) {
        var context = contexts[index];
        var result = template["experiment"](context);
        results += result;
      }

      port.postMessage({
        sender: "sandbox",
        receiver: "background",
        event: "sandbox rendered",
        target: results
      });
    }
  }
});
