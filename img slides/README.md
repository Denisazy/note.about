## to be continued...

用到一个HTML的展示框架[Reveal.js](https://github.com/hakimel/reveal.js)

如果只是普通的Presentation,那么它的[demo](http://lab.hakim.se/reveal-js)基本可以满足所有需求,README.md也写得很详细,根据需求食用.

## 快捷键

+ **F** : 全屏;
+ **SPACE** : 下一页;
+ **Esc,O** : 概览;
+ **A** : 自动播放时,实现暂停/播放功能
+ **B** : 暂停,出现黑色遮罩;
+ **方向键** : 上下左右切换;

## 自定义函数输出

你可以在自己的js中使用Reveal.js输出的函数

```javascript
Reveal.togglePause();
Reveal.toggleAutoSlide();
```

但是如果你希望单纯调用`pauseAutoSlide()`,而不是`toggleAutoSlide()`.

>会得到`Uncaught TypeError: Reveal.pauseAutoSlide is not a function`的报错.

打开Reveal.js,第4933行,在`Reveal = {}`中加上`pauseAutoSlide:pauseAutoSlide`,如果不是最后一个,记得加上逗号.

```javascript
//使用同上
Reveal.pauseAutoSlide();
```
