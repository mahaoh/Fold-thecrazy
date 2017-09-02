/*
* @Author: Marte
* @Date:   2017-09-02 15:11:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 16:12:49
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

     var swiper = new Swiper('.list', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
 var swiper = new Swiper('.list2', {
        pagination: '.swiper-pagination',
        slidesPerView: 1.8,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });