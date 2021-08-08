import './app2.css';
import  $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");


//  监听li的点击事件
$tabBar.on("click","li",e=>{
    const $li = $(e.currentTarget);   //  点击当前元素

    //  点击当前元素时，添加selected属性，取消他的兄弟的selected属性
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    const index = $li.index();

    //  当前index索引的内容添加active属性，他的兄弟取消active属性
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
});

$tabBar.children().eq(0).trigger('click');

