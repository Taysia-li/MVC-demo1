import  './app1.css';

//  引入jquery的新办法:
//  1. yarn  add jquery
//  2.删除新增的三个文件
//  3.yarn init -y
//  4.再次运行 yarn add jquery
import $ from 'jquery'
//console.log($)

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");

const n = localStorage.getItem("n");
const number = $("#number");
number.text(n || 100);

$button1.on("click",()=>{
    let n = parseInt(number.text());
    n += 1;
    localStorage.setItem("n",n);
    number.text(n);
});

$button2.on("click",()=>{
    let n = parseInt(number.text());
    n -= 1;
    localStorage.setItem("n",n);
    number.text(n);
});

$button3.on("click",()=>{
    let n = parseInt(number.text());
    n *= 2;
    localStorage.setItem("n",n);
    number.text(n);
});

$button4.on("click",()=>{
    let n = parseInt(number.text());
    n /= 2;
    localStorage.setItem("n",n);
    number.text(n);
});