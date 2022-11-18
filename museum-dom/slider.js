
//   $('.slider-for').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: true,
//    asNavFor: '.video__player-slider'
//  });
  
  
  
  $('.video__player-slider').slick({
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  //  asNavFor: '.slider-for',
  //   focusOnSelect: true,
  dots: true,
   appendDots: $('.video_dots'),
  prevArrow: $('.video__btn-left'),
  nextArrow: $('.video__btn-right'),
  });
 
