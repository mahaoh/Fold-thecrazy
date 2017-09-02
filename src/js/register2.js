/*
* @Author: Marte
* @Date:   2017-09-01 19:57:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 00:10:04
*/
$(function(){
     var count=59;
     var id=setInterval(function(){
        $('.coun').text(count+'s后重新获取');
        count--;
        if(count==0){
            $('.coun').text('请重新获取验证码')
            clearInterval(id);
        }
    },1000)

     $('.btn').click(function(event) {
         /* Act on the event */
         window.location.href="../html/index.html";
         localStorage.setItem('name','1');
     });
})