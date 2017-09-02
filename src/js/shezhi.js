/*
* @Author: Marte
* @Date:   2017-09-02 11:48:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 12:09:31
*/

$(function(){
    $('.btn').click(function(){
        localStorage.removeItem('name');
        window.location.href="../html/index.html"
    })
    $('.return').click(function(){
         window.history.go(-1);
    })
})