// 这是一行注释
alert('hello'); // 这也是注释

/* 从这里开始是块注释
仍然是注释
仍然是注释
注释结束 */

var x = 1;
'Hello, world';
if (2 > 1){
  x = 1;
  y = 2;
  z = 3;
  if (x < y){
    z = 4;
  }
  if (x > y){
    z = 5;
  }
}

123; // 整数123
0.456; // 浮点数0.456
1.2345e3;  // 科学记数法表示1.2345 * 1000，即1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

1+2; // 3
(1+2)*5/2; // 7.5
2/0; // Infinity
0/0; // NaN
10%3; // 1
10.5%3; // 1.5

true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值

true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false

false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true

!true; // 结果为false
!false; // 结果为true
!(2>5); // 结果为true

var age = 15;
if (age >= 18){
  alert('adult');
} else {
  alert('teenager');
}

2 > 5; // false
5 >= 2; // true
7 == 7; // true

false == 0; // true
false === 0; //false

NaN === NaN; // false

isNaN(NaN); // true

1/3 === (1-2/3); // false

Math.abs(1/3 - (1-2/3)) < 0.000001; //true

[1,2,3.14,'Hello', null, true];

new Array[1, 2, 3]; // 创建了数组[1, 2, 3]

var arr = [1, 2, 3.14, 'hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回underfined

var person = {
  name: 'Bob',
  age: 20,
  tags: ['js', 'web', 'mobile'],
  city: 'Beijing',
  hasCar: true,
  zipcode: null
};

person.name; // 'Bob'
person.zipcode; // null

var a; // 申明了变量a，此时a的值为underfined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null

var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串

'I\'m \"OK\"!';

`这是一个
多行
字符串`;

var name = '小明';
var age = 20;
var message = `你好，${name}，你今年${age}岁了！`;
alert(message);

var s = 'Hello, world!';
s.length; // 13

var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // underfined

var s = 'Hello';
s.toUpperCase(); // HELLO
var s = 'Hello';
var lower = s.toLowerCase(); // hello
lower; // 'hello'

var s = 'hello, world';
s.indexOf('world'); // 7
s.indexOf('World'); // -1

var s = 'hello, world'
s.substring(0, 5); // hello
s.substring(7); // world

var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6

var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // [1,2,3,underfined,underfined,underfined]
arr.length = 2;
arr; // [1,2]

var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr; // ['A', 99, 'C']

var arr = [1, 2, 3];
arr[5] = 'x';
arr; [1, 2, 3, underfined, underfined, 'x']

var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 0
arr.indexOf(20); // 1
arr.indexOf(30); // -1
arr.indexOf('30'); // 2

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // ['A', 'B', 'C']
arr.slice(3); // ['D', 'E', 'F', 'G']

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false （JS不能直接判断数组是否相等，需要先转换为字符串）

var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度：4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回underfined
arr; //[]

var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度：4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回underfined
arr; // []

var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']

var arr = ['one', 'two', 'three'];
arr.reverse();
arr; // ['three', 'two', 'one']
