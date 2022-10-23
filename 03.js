let age = prompt("请输入您的年龄");
let str = "您今年已经" + age + "岁了";
alert(str);
function maxNum() {
  //获取两个文本框的值

  var x = document.getElementById("num1").value;

  var y = document.getElementById("num2").value;

  //强制转换为数值型

  x = parseFloat(x);

  y = parseFloat(y);

  if (x < y) {
    alert("最大数是：" + y);
  } else {
    alert("最大数是：" + x);
  }
}
