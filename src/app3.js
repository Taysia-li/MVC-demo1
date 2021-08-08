import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click', ()=>{
    $square.toggleClass('active')

    /*
        // 上面的代码等价于下面的
        //  如果active为true，则添加active
        if(active){
            $square.addClass('active');
        }
        else{
            $square.removeClass('active');
        }

     */
});