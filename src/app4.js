import './app4.css';
import $ from "jquery";

const $circle = $('#app4 .circle');

//  当鼠标进入指定区域时，添加active
$circle.on('mouseenter',()=>{
    $circle.addClass('active');
}).on('mouseleave',()=>{
    $circle.removeClass('active');
});