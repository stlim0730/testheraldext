(function () {
  console.log('Trying to find XHR to optimizely');
  var XHR = XMLHttpRequest.prototype;
  var open = XHR.open;
  var send = XHR.send;

  XHR.open = function(method, url) {
    this._method = method;
    this._url = url;
    return open.apply(this, arguments);
  };

  XHR.send = function(postData) {
    this.addEventListener('load', function () {
      if (this._url.indexOf && this._url.indexOf('optimizely.com') > -1) {
        if (Object.keys(JSON.parse(this.responseText)).indexOf('error') === -1) {

          var orgArticles = {};
          var articleList = document.querySelectorAll('article');
          for(var i = 0; i < articleList.length; i++) {
            
            var article = articleList[i].outerHTML;
            // <article class="story theme-summary" id="topnews-100000004573071" data-story-id="100000004573071" data-rank="0" data-collection-renderstyle="HpSum">
            //   <h3 class="kicker">Mediator </h3>
            //   <h2 class="story-heading">
            //     <a href="http://www.nytimes.com/2016/08/08/business/balance-fairness-and-a-proudly-provocative-presidential-candidate.html">Trump Is Testing the Norms of Objectivity in Journalism</a>
            //   </h2>
            //   <p class="byline">By JIM RUTENBERG</p>
            //   <p class="summary">Mr. Trump is forcing journalists to grapple with whether, or when, to abandon rules of traditional reporting.</p>
            //   <p class="theme-comments">
            //     <a href="http://www.nytimes.com/2016/08/08/business/balance-fairness-and-a-proudly-provocative-presidential-candidate.html?hp&amp;target=comments#commentsContainer" class="comments-link">
            //       <i class="icon sprite-icon comments-icon"></i>
            //       <span class="comment-count">&nbsp;Comments</span>
            //     </a>
            //   </p>
            // </article>
            var identifier = article.match(/data-story-id="[0-9]+"/);
            if(identifier && identifier.length > 0) {
              identifier = identifier[0].substring(15, identifier[0].length - 1);
              // console.log(identifier);
              while(article.includes('\n')) {
                article = article.replace('\n', '');
              }
              orgArticles[identifier] = article;
            }
            else {
              continue;
            }
          }

          // Collect all the articles
          window.postMessage({
            sender: 'injection',
            receiver: 'content',
            event: 'caught xhr',
            target: JSON.stringify(orgArticles)

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
