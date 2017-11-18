## 删除数组的重复项

```javascript
//删除后面重复元素
function removeRepeat(arr){
        var a1=((new Date).getTime()) //获得开始时间
        for(var i=0;i<arr.length;i++)
            for(var j=i+1;j<arr.length;j++)
                if(arr[i]===arr[j]){arr.splice(j,1);j--;}
        console.info((new Date).getTime()-a1) //记录去除数组重复元素所花费时间
        return arr.sort(function(a,b){return a-b});
    }
```

## 输出数组的重复项

```javascript
//找出menuArry数组的重复项，输出为repeatArr
var repeatArr = new Array();//重复项
var s = menuArray.join(",") +",";
for(var o = 0; o < menuArray.length; o++)
{
   if(s.replace(menuArray[o] + ",", "").indexOf(menuArray[o] +",") > -1)
    {
       repeatArr.push(menuArray[o]);
    }
}
```









