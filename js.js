// 2.向上取整,有小数就整数部分加1。http://www.jb51.net/article/50005.htm
console.log(Math.ceil(5/2));

// 测试vscode的run coder是否允许只运行选定行的代码。
console.log('z');


// js 获得元素src
// jquery
var img1src = $("#jsb_czq_pic1")[0].src;alert("img1src:"+img1src);
var img2src = $("#jsb_czq_pic2").attr("src");alert("img2src:"+img2src);
// 原生js
var img3src = document.getElementById('jsb_czq_pic3').src;alert("img3src:"+img3src);

// 遍历对象的属性
var person = {fname: "John", lname: "Doe", age: 25};
for (x in person) {
    txt = txt + person[x];
}
// 结果：JohnDoe25