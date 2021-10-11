// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
  $('.video__player-slider').slick({
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dotsClass: $('.video__item'),
  dots: true,
   appendDots: $('.video__item'),
  prevArrow: $('.video__btn-left'),
nextArrow: $('.video__btn-right'),

  });
 
//   $('a[data-slide]').click(function(e) {
//     e.preventDefault();
//     var slideno = $(this).data('slide');
//     $('.slider-nav').slick('slickGoTo', slideno - 1);
//   });