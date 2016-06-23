function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}


chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id)
    chrome.pageAction.setTitle({'tabId':sender.tab.id,'title':'optimise.ly'});

    chrome.pageAction.getPopup({"tabId":sender.tab.id},function(result){
    	console.log(result);
    })
    
  });


// chrome.pageAction.onClicked.addListener(
//   function (tab) {
  
//   	chrome.pageAction.setPopup({'tabId':tab.id,'popup':'background.html'})
//     chrome.tabs.sendMessage(tab.id, "");
//     console.log(sender)
//     setChildTextNode('status',"Haz optimisely?");
//     setChildTextNode('myTest',"Yup. Here's what we see:\r\n");
// });
