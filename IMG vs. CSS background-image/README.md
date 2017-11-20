## IMG vs. CSS background-image

设置图片的宽度、高度,图片显示的时候不拉伸<br/>

![No Alt text](https://github.com/Denisazy/code-note/blob/master/img%20slides/img/1.jpg)
比如上面这张图,显示为100px*100px,不拉伸:<br/>
![No Alt text](1.png)

> `<img>`标签下可以使用css的`object-fit`属性

```html
<img src="yourpath/1.jpg" class="cover" />
<style>
.cover {
  object-fit: cover;
  width: 100px;
  height: 100px;
}
</style>
```

> 用`background-image`方式添加图片的话,可以把`background-size`设置为`cover`

```html
<div class="container"></div>​
<style>
.container {
    width: 100px;
    height: 100px;
    background-image: url("yourpath/1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}​
</style>
```

