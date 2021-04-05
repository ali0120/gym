$(function(){
    'use strict';
    $("html").niceScroll({
        cursorcolor:"#2DCC70",
        cursorwidth: "10px",
        cursorborderradius: "10px",
         scrollspeed: 100,
    });
    
    $('.navbar .classes').click(function(){
       $('html,body').animate({
        scrollTop:$('.all_classes').offset().top   
       },2000);
    });
    $('.navbar .price').click(function(){
      $('html,body').animate({
          scrollTop:$('.pricing').offset().top
      },2000); 
    });
    $('.navbar .trainer').click(function(){
      $('html,body').animate({
          scrollTop:$('.trainers').offset().top
      },2000); 
    });
    $('.navbar .contact-us').click(function(){
      $('html,body').animate({
          scrollTop:$('.contact').offset().top
      },2000); 
    });
    $('.navbar li a').click(function(){
       $(this).parent().addClass('wow hinge').siblings().removeClass('wow hinge');
        new WOW().init();
    })
});