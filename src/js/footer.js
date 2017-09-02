/*
* @Author: Marte
* @Date:   2017-08-31 23:43:42
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 16:13:11
*/

$(function(){
     var data =localStorage.getItem('name');
      $('.fenlie').click(function(){
          window.location.href="../html/classify.html"
        })

        $('.juntuan').click(function(){
          window.location.href="../html/center.html"
        })


        $('.zui').click(function(){
            window.location.href="../html/zui.html"
        })
        $('.wode').click(function(){
          if(JSON.parse(data)==1){
             window.location.href="../html/wode2.html"
          }else{
            window.location.href="../html/wode.html"
          }
        })
        $('.shouye').click(function(){
             window.location.href="../html/index.html"
        })
})