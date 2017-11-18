## 检查cookie,运行函数

在HTML头部引入
```html
<script type="text/javascript" src="yourpath/cookie.js"></script>
```

随后添加检测函数
```javascript
function checkCookieIntro() {
           var cookie=getCookie("mySite");
           if (cookie==null || cookie=="" ) {
              setCookie("mySite", "1",90);  //此处cookie过期时间为90天
              //如果没有cookie，此处添加你想运行的函数
              }
}
```
加载网页时运行检测函数
```html
<body onload="checkCookieIntro()">
```







