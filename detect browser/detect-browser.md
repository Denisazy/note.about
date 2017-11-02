## js判断浏览器

```javascript
//将这段代码粘贴到浏览器的console中运行即可检测
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var output = '浏览器检测:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
```
在这些浏览器中测试有效：
+ Firefox 0.8 - 44
+ Chrome 1.0 - 48
+ Opera 8.0 - 34
+ Safari 3.0 - 10
+ IE 6 - 11
+ Edge - 20-25

```javascript
//具体用法
if (isChrome){
     alert("yes chrome"); //或者替换成你想在chrome中运行的函数
 }else{
    alert("not  chrome");//或者替换成你想在chrome之外的浏览器中运行的函数
 }
```

* 来源于stackoverflow问题[How to detect Safari, Chrome, IE, Firefox and Opera browser?](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser?noredirect=1)的回答。

## 条件注释判断浏览器版本

在IE9及以下版本中加载修复的css文件：
```html
<!--[if lte IE 9]>
    <link href="css/fixie.css" rel="stylesheet" />
<![endif]--> 
```

只有在IE浏览器中，才能看到应用了test类的元素是红色文本：
```html
<!--[if IE]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

	<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->

	<!--[if IE]> 所有的IE可识别 <![endif]-->

	<!--[if IE 6]> 仅IE6可识别 <![endif]-->

	<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->

	<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->

	<!--[if IE 7]> 仅IE7可识别 <![endif]-->
	
	<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
	
	<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
	
	<!--[if IE 8]> 仅IE8可识别 <![endif]-->
	
	<!--[if IE 9]> 仅IE9可识别 <![endif]-->


<table  align="center">
<tbody>
<tr><th width="50">符号</th><th width="150">栗子</th><th>说明</th></tr>
<tr>
<td align="middle">!</td>
<td>[if !IE]</td>
<td>The NOT operator. This is placed immediately in front of the&nbsp;<em>feature</em>,&nbsp;<em>operator</em>, or&nbsp;<em>subexpression</em>&nbsp;to reverse the Boolean meaning of the expression.<br />NOT运算符。这是摆立即在前面的<em>功能</em>，<em>操作员</em>，或<em>子表达式</em>扭转布尔表达式的意义。</td>


</tr>
<tr>
<td align="middle">lt</td>
<td>[if lt IE 5.5]</td>
<td>The less-than operator. Returns true if the first argument is less than the second argument.<br />小于运算符。如果第一个参数小于第二个参数，则返回true。</td>


</tr>
<tr>
<td align="middle">lte</td>
<td>[if lte IE 6]</td>
<td>The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.<br />小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回true。</td>


</tr>
<tr>
<td align="middle">gt</td>
<td>[if gt IE 5]</td>
<td>The greater-than operator. Returns true if the first argument is greater than the second argument.<br />大于运算符。如果第一个参数大于第二个参数，则返回true。</td>


</tr>
<tr>
<td align="middle">gte</td>
<td>[if gte IE 7]</td>
<td>The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.<br />大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回true。</td>


</tr>
<tr>
<td align="middle">( )</td>
<td>[if !(IE 7)]</td>
<td>Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.<br />子表达式运算符。在与布尔运算符用于创建更复杂的表达式。</td>


</tr>
<tr>
<td align="middle">&amp;</td>
<td>[if (gt IE 5)&amp;(lt IE 7)]</td>
<td>The AND operator. Returns true if all subexpressions evaluate to true<br />AND运算符。如果所有的子表达式计算结果为true，返回true</td>


</tr>
<tr>
<td align="middle">|</td>
<td>[if (IE 6)|(IE 7)]</td>
<td>The OR operator. Returns true if any of the subexpressions evaluates to true.<br />OR运算符。返回true，如果子表达式计算结果为true。</td>


</tr>
</tbody>
</table>



