/*
* @Author: Marte
* @Date:   2017-09-01 10:22:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-01 19:34:31
*/
 var mySwiper2 = new Swiper('#swiper-container2',{
watchSlidesProgress : true,
watchSlidesVisibility : true,
slidesPerView : 5,
onTap: function(){
            mySwiper3.slideTo( mySwiper2.clickedIndex)
        }
})
var mySwiper3 = new Swiper('#swiper-container3',{

onSlideChangeStart: function(){
            updateNavPosition()
        }

})

function updateNavPosition(){
        $('#swiper-container2 .active-nav').removeClass('active-nav')
        var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


        if (!activeNav.hasClass('swiper-slide-visible')) {
console.log(1);
            if (activeNav.index()>mySwiper2.activeIndex) {
console.log(2);
                var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
                mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
            }
            else {
console.log(3);
                mySwiper2.slideTo(activeNav.index())
            }
        }
    }

    $.ajax({
        type:'get',
        url:"../json/nav.json",
        dataType:'json',
        success:function(data){
            var str=template('nav',{list:data});
            $('.ul_list ul').append(str);
            $('.ul_list ul').children().eq(0).addClass('active_list');
             $('.ul_list').children().children().click(function(){
                $(this).addClass('active_list').siblings().removeClass('active_list');
                // console.log($(this).attr('data-index'))
             })
        }
    })

    $.ajax({
        type:"get",
        url:"../json/data_list.json",
        dataType:"json",
        success:function(data){
            var str=template('data_list',{list:data});
            $('.list').append(str);
        }
    })
    $.ajax({
        type:"get",
        url:"../json/wang.json",
        dataType:'json',
        success:function(data){
            var str=template('wang',{list:data});
            $('.wang_list').append(str);
        }
    })