/*
* @Author: Marte
* @Date:   2017-08-30 19:22:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 18:43:49
*/

$(function(){


    var mySwiper = new Swiper ('.banner', {
    direction: 'horizontal',
   autoplay: 1000,
   loop: true,
    autoplayDisableOnInteraction:false,
      paginationClickable: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',

  })
     var swiper = new Swiper('.list', {
        pagination: '.swiper-pagination',
        slidesPerView: 3.3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

     //滚动条超出多少高度后改变搜素框背景颜色
        $(window).scroll(function() {
        //获得当前视口的高度
        var banner_height=$('.banner').height();
        //获得滚动条的偏移距离
         var b=$(this).scrollTop();
        // //获得元素距离顶部的高度
        // var offset=$('.list').offset();
         if (b > banner_height) {
         $('.search').css({
            'background':'#fff',
         });
       $('.search_right').children('img').attr('src','../images/indeximg/xinxi_03.png')

    }else{
  $('.search').css({
            'background':'',
         });
  $('.search_right').children('img').attr('src','../images/indeximg/information.png')
}
        });
        $.ajax({
          type:'get',
          url:"../json/commodity.json",
          dataType:'json',
          success:function(data){
            // console.log(data)
            var _liebiao="";
              _liebiao=template('commodity',{list:data});
              $('.shangpin').append(_liebiao)
            console.log(data)
            var swiper = new Swiper('.commodity_list', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerView: 'auto'

    });
          }
        })


        $.ajax({
          type:'get',
          url:"../json/pintuan.json",
          dataType:'json',
          success:function(data){
            console.log(data)
             var _liebiao="";
              _liebiao=template('pintuan',{list:data});
              $('.pintuan').append(_liebiao)
          }
        })

        $('.search_left').click(function(){
          window.location.href="../html/sousu.html"
        })

        $('.search_right').click(function(){
          window.location.href="../html/xiaoxi.html"
        })
        $('.oumei').click(function(){
        window.location.href="../html/meiguo.html"
    })
        $('.riben').click(function(){
          window.location.href="../html/riben.html"
        })
        $('.aoxin').click(function(event) {
          /* Act on the event */
          window.location.href="../html/aoxin.html"
        });
        $('.hanguo').click(function(){
          window.location.href="../html/hanguo.html"
        })
})