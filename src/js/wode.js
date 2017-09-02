/*
* @Author: Marte
* @Date:   2017-08-31 17:05:03
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-01 19:54:28
*/

$(function(){
    $('.return').click(function(){
        window.history.go(-1);
    })

    $('.zhuce').click(function(){
        window.location.href="../html/register1.html"
    })
})