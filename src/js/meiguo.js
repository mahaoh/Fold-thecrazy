/*
* @Author: Marte
* @Date:   2017-09-02 16:20:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 18:22:04
*/

var swiper = new Swiper('.swiper-container', {
            // spaceBetween: 50,
            slidesPerView: 3.3,
            // centeredSlides: true,
            // slideToClickedSlide: true,
            // grabCursor: true,
            scrollbar: '.swiper-scrollbar'
            // pagination: '.swiper-pagination',
            // history: 'slide',
        });
    $('.return').click(function(){
       window.history.go(-1);
    })
    $('.oumei').click(function(){
        window.location.href="../html/meiguo.html"
    })