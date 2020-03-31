//START: Disqus integration

answersSdk.addListener(answersSdk.events.pageLoad, function (event) {
  
  if (answersSdk.getVisiblePageType() === answersSdk.pages.article) {
  
  //Disqus config vars for article-specific comments.
  var disqus_config = function () { 
  this.page.url = answersSdk.getVisiblePageData().article.url;
  this.page.identifier = answersSdk.getVisiblePageData().article.id;
  };
  
  //Targets DOM node after where we will insert Disqus container.
  let targetNode = document.querySelector(".article-actions");
    
  //Creates DIV where Disqus container will reside.
  let createDisqusContainer = document.createElement('div')
  createDisqusContainer.setAttribute("id", "disqus_thread")
  targetNode.appendChild(createDisqusContainer)

  //Loads Disqus script.
  let selectDisqusContainer = document.querySelector("#disqus_thread")
  let insertDisqus = document.createElement('script')
  insertDisqus.src = ''; //Add account specific Disqus script URL e.g. https://<YOUR_DOMAIN>.disqus.com/embed.js
  insertDisqus.setAttribute('data-timestamp', +new Date());
  targetNode.appendChild(insertDisqus)

}
});

//END: Disqus integration
