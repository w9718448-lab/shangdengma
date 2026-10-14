// 静态展示版：页面可以浏览和跳转，提交类操作只提示。
(function(){
  var t=document.createElement("div");t.className="sdm-toast";document.body.appendChild(t);var h;
  function tip(){t.textContent="这是浏览版：可以随意查看各页面，编辑和提交在本地版中可用。";t.classList.add("on");clearTimeout(h);h=setTimeout(function(){t.classList.remove("on")},2400)}
  document.addEventListener("submit",function(e){e.preventDefault();tip()},true);
  document.addEventListener("click",function(e){var b=e.target.closest("button,[role=button],input[type=submit]");if(b&&!b.closest("summary")){e.preventDefault();tip()}var a=e.target.closest("a[href='#']");if(a){e.preventDefault();tip()}},true);
})();
