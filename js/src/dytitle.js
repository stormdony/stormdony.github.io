// build time:Wed Sep 25 2019 14:50:04 GMT+0800 (GMT+08:00)
var OriginTitile=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/img/TEP.ico");document.title=" 你不理我了！";clearTimeout(titleTime)}else{$('[rel="icon"]').attr("href","/favicon.ico");document.title=" 么么哒 "+OriginTitile;titleTime=setTimeout(function(){document.title=OriginTitile},2e3)}});
//rebuild by neat 