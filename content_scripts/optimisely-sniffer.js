function main () {
  
  
  function handler(event){
    if(event.data.state==='eval'){
      var executable = window.optimizely['allVariations'][event.data.id]['code'];

      if(typeof executable !== 'undefined'){
        // console.log(executable);  
        eval(executable);
        var msg ={type:'executed : '};
      }
      // else{
      //   console.log(window.optimizely['allVariations'][event.data.id]);
      //   console.log(window.optimizely['allExperiments'][event.data.id]);
      // }
    }
  }

  var isFunction = function(obj) {
    return Object.prototype.toString.call(obj) == '[object Function]';
  };

  if (window.optimizely) {
    // listen();  
    window.addEventListener("message",handler,false);    
    var msg ={type:'variation',experiments: optimizely['allExperiments'],variations:optimizely['allVariations']};
    window.postMessage(msg, "*");
    
    // select the target node
    var target = document.querySelector('body');
    
    // create an observer instance
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // console.log(mutation.type);
        // console.log(mutation.target);
        // console.log(mutation.addedNodes);
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          mutation.addedNodes[i].style.background = 'pink';
          mutation.addedNodes[i].scrollIntoView();
        };
        // console.log(mutation.attributeName);
        var colors = ['yellow','green','red','orange'];
        var idx = Math.floor(Math.random() *  colors.length)
        // console.log(Object.keys(mutation.target));
        // mutation.target.style.color = colors[idx];
        // mutation.target.scrollIntoView();
        
        if(mutation.type == 'childList'){
          var list_values = [].slice.call(target.children)
          console.log(list_values)
        }
      });
    });
     
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true ,subtree:true};
     
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
     // console
    // later, you can stop observing
    // observer.disconnect();    
  } else {
      var msg ={type:'no-optimisely'};
      window.postMessage(msg, "*");
  }
}

main();	
