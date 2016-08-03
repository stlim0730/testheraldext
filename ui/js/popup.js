console.log('started:', 'popup');

//
// Globals
//

var siteConfigs = {
  nypost: {
    name: 'New York Post',
    headlineTags: ['h3'],
    headlineWrapper: ['article'],
    scrollTopMargin: 100,
    selectorAttr: 'class',
    selectorPrefix: '',
    selectorExtractRegex: 'postid-[0-9]+'
  },

  nytimes: {
    name: 'New York Times',
    headlineTags: ['article'],
    headlineWrapper: ['article'],
    scrollTopMargin: 200,
    selectorAttr: 'data-story-id',
    selectorPrefix: 'runComplexABTest(',
    selectorExtractRegex: 'runComplexABTest\\(\\s*\\d+'
  }
};

//
// Start
//

var port = chrome.extension.connect();
port.postMessage({
  sender: 'popup',
  receiver: 'background',
  event: 'init',
  target: ''
});



port.onMessage.addListener(function (msg) {
  console.log('received a message:', msg);

  switch(msg.sender) {

    case 'background':

      switch(msg.event) {
        
        case 'rendered in sandbox':
          var url = msg.target.url;
          var siteKey = null;
          for(var key in siteConfigs) {
            if(url.includes(key)) {
              siteKey = key;
              break;
            }
          }
          var count = msg.target.count;
          if(count == 0) {
            // Nothing to show
            $('div.not-found').show();
            $('div.found').hide();
          }
          else {
            // Show something
            if(msg.target.isUsingPrePopulated) {
              $('span.debug-note').show();
            }

            $('div.not-found').hide();
            $('div.found').show();

            if(count < 2) { // Singular
              count += ' experiment';
            }
            else { // Plural
              count += ' experiments';
            }
            $('#experiment-count').text(count);
            $('#active-experiments').html(msg.target.results);
            
            $('li.list-group-item').click(function(e) {
              var currentHeadline = $(this).parent('div.list-group').find('strong.current-headline');
              if(currentHeadline) {
                currentHeadline = currentHeadline.text().trim();
                var siteConfig = siteConfigs[siteKey];

                // Highlight
                port.postMessage({
                  sender: 'popup',
                  receiver: 'background',
                  event: 'highlight',
                  target: {
                    currentHeadline: currentHeadline,
                    siteConfig: siteConfig
                  }
                });
              }
            });
          }
          break;
      }

    break;
  }
});



$('a.share-on-twitter').click(function (e) {
  e.preventDefault();

  var prePopulText = $(this).data('text');

  chrome.windows.create({
    url: 'https://twitter.com/intent/tweet?text=' + prePopulText + '&via=ProPublica',
    width: 680,
    height: 444,
    type: 'panel',
    focused: true
  }, function (newWindow) {
    console.info('tweet popup window ID:', newWindow);
  });
});
