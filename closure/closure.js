/* let 创建块级作用域 */
/*
for (var i = 1; i <=5; i++) {
  {
    let j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j*1000);
  }
}
*/

/* 立即执行函数创建作用域 */
/*
for (var i = 1; i <=5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j*1000);
  })(i);
}
*/

/* for循环头部的let */
/*
for (let i = 1; i <=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
}
*/

function foo() {
  console.log(a);
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();
