// window.addEventListener("message", function (msg) {
//   // if (msg.data.receiver !== "sandbox") return true;

//   console.info(msg.data);

//   if (msg.data.sender === "background") {
//     if (msg.data.event === "sandbox render") {
//       var results = "";
//       var source = $("#experiment-template").html();
//       var template = {};
//       template["experiment"] = Handlebars.compile(source);
//       var contexts = JSON.parse(msg.data.target);

//       for (var index in contexts) {
//         var context = contexts[index];
//         var result = template["experiment"](context);
//         results += result;
//       }

//       port.postMessage({
//         sender: "sandbox",
//         receiver: "background",
//         event: "sandbox rendered",
//         target: results
//       });
//     }
//   }
// });
(function() {
  console.log('started:', 'sandbox');

  //
  // Globals
  //
  var sbRenderer;
  Handlebars.registerHelper('inc', function(value, options) {
    return parseInt(value) + 1;
  });

  //
  // Start
  //
  
  var port = chrome.runtime.connect();
  port.postMessage({
    sender: 'sandbox',
    receiver: 'background',
    event: 'init',
    target: ''
  });

  port.onMessage.addListener(function (msg) {
    console.log('received a message:', msg);

    switch(msg.sender) {
      case 'background':
        
        switch(msg.event) {
            
            case 'init-feedback':
              // Compile sources
              sbRenderer = new SandboxRenderer({
                sources:[
                  {
                    experiment: $('#experiment-template').html()
                  }
                ],
                compileFunction: Handlebars.compile
              });
              // var sampleContext = {  
              //   "id":"6405201336",
              //   "variations":[  
              //     {  
              //       "name":"The ugly scenes behind the blue wall of Facebook",
              //       "id":"6403512398",
              //       "current":false
              //     },
              //     {  
              //       "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Working at Facebook is worse than you could imagine \");",
              //       "name":"Working at Facebook is worse than you could imagine",
              //       "id":"6403512399",
              //       "current":false
              //     },
              //     {  
              //       "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"The ruthless, punishing life of a Facebook employee \");",
              //       "name":"The ruthless, punishing life of a Facebook employee",
              //       "id":"6399660190",
              //       "current":false
              //     },
              //     {  
              //       "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Insider reveals what really goes on at Facebook \");",
              //       "name":"Insider reveals what really goes on at Facebook",
              //       "id":"6388751002",
              //       "current":true
              //     },
              //     {  
              //       "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"It's not OK to talk about your wealth at Facebook \");",
              //       "name":"It's not OK to talk about your wealth at Facebook",
              //       "id":"6386990817",
              //       "current":false
              //     }
              //   ]
              // };
              // console.log(sbRenderer.sbRender('experiment', sampleContext));
              break;

            case 'render in sandbox':
              // Render in sandbox with context
              var results = sbRenderer.sbRender(msg.target.templateName, msg.target.context);
              port.postMessage({
                sender: 'sandbox',
                receiver: 'background',
                event: 'rendered in sandbox',
                target: {
                  results: results,
                  count: msg.target.count,
                  siteName: msg.target.siteName
                }
              });
          }
          break;

        break;
    }

  });
})();
