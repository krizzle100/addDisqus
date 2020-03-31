answersSdk.addListener(answersSdk.events.pageLoad, function (event) {
  
  if (answersSdk.getVisiblePageType() === answersSdk.pages.article) {
  console.log('You are inside an article');

  var disqus_config = function () {
  this.page.url = answersSdk.getVisiblePageData().article.url;
  this.page.identifier = answersSdk.getVisiblePageData().article.id;
  };

  let a = document.querySelector(".article-actions");
  let b = document.createElement('div')
  b.setAttribute("id", "disqus_thread")
  a.appendChild(b)

  let z = document.querySelector("#disqus_thread")
  let m = document.createElement('script')
  m.src = 'https://platypusplayground-1.disqus.com/embed.js';
  m.setAttribute('data-timestamp', +new Date());
  a.appendChild(m)

}
});

//END: Disqus integration
