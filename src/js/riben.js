/*
* @Author: Marte
* @Date:   2017-09-02 18:25:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 18:40:46
*/

/*
* @Author: Marte
* @Date:   2017-09-02 18:28:03
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 18:38:33
*/

/*
* @Author: Marte
* @Date:   2017-09-02 18:28:03
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 18:33:40
*/

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
