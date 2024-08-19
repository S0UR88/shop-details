// jquery

$(function(){
    
    // Quantity section
    var i = 1
    
    $('.plus').click(function(){
      i=parseInt($('.num').val());
      i=i+1;
      $('.num').val(i);
    })
    
    $('.minus').click(function(){
      i=parseInt($('.num').val());
      i=i-1;
      if(i==-1){
        i=0;
      }
      $('.num').val(i);
    })
    
    
    
    // Leather Jackets 
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      prevArrow: '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
      centerMode: true,
      focusOnSelect: true
    });


    // Related Product

$('.relatedProduct').slick({
    slidesToShow: 4,
    prevArrow: '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 992,
         settings: {
            slidesToShow: 3
          }
        },
       {
            breakpoint: 577,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 402,
            settings: {
              slidesToShow: 1
            }
          }
  
      ]
  
  });

})

// Bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))