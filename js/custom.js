jQuery(function($) {

  // Sticky Sidebar
  $('.themeProductContent, .themeProductStats').theiaStickySidebar({
    additionalMarginTop: 100,
	additionalMarginBottom: 20
  });
  
  // Sticky Sidebar Bottom Content Animation  
  var $header = $('.themeProductStats');
  
  $(window).scroll(function () { 
    if ($header.offset().top - $(this).scrollTop() >= 100) {
      $(".themeProductStickBottom").removeClass('show');
    } 
	else if ($header.offset().top - $(this).scrollTop() < 100) {
      $(".themeProductStickBottom").addClass('show');
    }
  });
  
  // Scroll To Top Button
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".scroll").removeClass("animated zoomOut");
      $(".scroll").css('display', 'flex');
      $(".scroll").addClass("animated zoomIn");
    } 
	else {
      $(".scroll").removeClass("animated zoomIn");
      $(".scroll").addClass("animated zoomOut");
    }
  });

  $(".scroll").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  
  // Accordion
  $(".question").click(function() {
    $(".answer").slideUp();
    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
      $(this).removeClass("active");
    } else {
      $(this).next().slideDown();
      $('.question').removeClass("active");
      $(this).addClass("active");
    }
  });
  
  // Mobile Navigation
  $('.hamburger').on('click', function(){
    $('.mobileMenu, .mobileNavigation').toggleClass('slide');
    $('.hamburger span').toggleClass('fade');
    $('.hamburger').toggleClass('rotate');
  });
  
  // Mobile Header Scroll Animation
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $(".mobileHeader").addClass("scroll");
    }
	else {
      $(".mobileHeader").removeClass("scroll");
    }
  });
	
});