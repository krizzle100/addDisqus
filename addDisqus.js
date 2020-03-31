//START: Disqus integration

answersSdk.addListener(answersSdk.events.pageLoad, function (event) {
  
  if (answersSdk.getVisiblePageType() === answersSdk.pages.article) {
  
  //Disqus config vars for article-specific comments.
  const disqus_config = function () { 
  this.page.url = answersSdk.getVisiblePageData().article.url;
  this.page.identifier = answersSdk.getVisiblePageData().article.id;
  };
  
  //Targets DOM node after where we will insert Disqus container.
  const targetNode = document.querySelector(".article-actions");
    
  //Creates DIV where Disqus container will reside.
  const createDisqusContainer = document.createElement('div')
  createDisqusContainer.setAttribute("id", "disqus_thread")
  targetNode.appendChild(createDisqusContainer)

  //Loads Disqus script.
  const selectDisqusContainer = document.querySelector("#disqus_thread")
  const insertDisqus = document.createElement('script')
  insertDisqus.src = ''; //Add account specific Disqus script URL e.g. https://<YOUR_DOMAIN>.disqus.com/embed.js
  insertDisqus.setAttribute('data-timestamp', +new Date());
  targetNode.appendChild(insertDisqus)

}
});

//END: Disqus integration
