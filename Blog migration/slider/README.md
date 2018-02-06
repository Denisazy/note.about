## 图片的幻灯片效果

这是一个单纯的图片轮播，可以做一个小banner<br/>
编写html,加入一下元素

```html
<div class="slideshow-container">

<div class="mySlides fade">
 <div class="numbertext">1 / 3</div>
 <img src="img_parallax.jpg" style="width:100%">
 <div class="text">住在加州圣费尔南多谷的伊莎贝尔是个天真善良的女巫</div>
</div>

<div class="mySlides fade">
 <div class="numbertext">2 / 3</div>
 <img src="img_parallax2.jpg" style="width:100%">
 <div class="text">她对自己的人生规划既不是成为一个哈利·波特那样的巫界明星</div>
</div>

<div class="mySlides fade">
 <div class="numbertext">3 / 3</div>
 <img src="img_parallax3.jpg" style="width:100%">
 <div class="text">也不是冲锋陷阵、当个拯救全人类的女英雄，她只想过上正常人的普通生活</div>
</div>
//两侧切换箭头
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>
//下方切换圆点
<div style="text-align:center">
 <span class="dot" onclick="currentSlide(1)"></span> 
 <span class="dot" onclick="currentSlide(2)"></span> 
 <span class="dot" onclick="currentSlide(3)"></span> 
</div>
```

然后加上css样式：

```html
<style>
* {box-sizing:border-box}

/* 幻灯片的容器 */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.mySlides {
    display: none;
}

/* 上一张，下一张按钮 */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* 鼠标上移时，加上一点黑色，降低透明度 */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* 文字内容 */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* 左上角数字 */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* 点*/
.dot {
  cursor:pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fade 动效 */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
/*Safari 和 Chrome 支持 @-webkit-keyframes 规则*/
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
/*通过 @keyframes 规则，我们够创建动画，各浏览器对此功能支持率较低*/
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>
```

加入JavaScript：

```html
<script>
var slideIndex = 1;  //默认第一张图
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //最后一张循环回第一张   
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
</script>
```



若要slideshow自动播放呢？<br/>
把JavaScript改成如下内容：

```html
<script>
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // 每两秒钟换一张图
}
</script>
```





