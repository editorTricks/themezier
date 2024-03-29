jQuery(function($) {
	
  // Feature Description
  var textArray = [
  'Random Post Generator',
  'Numbered Blog Pagination',
  'Trending Content',
  'Blog Post Search',
  'Most Popular Blog Posts',
  'News Tickers',
  'Blog Post Tags',
  'Bread Crumbs',
  'Owl Carousel Slider',
  'Recommended Content',
  'Sticky Sidebar',
  'Free Footer',
  'H1 Tags',
  ],
    
  i = 0;

  setInterval(function(){
    i = i == textArray.length ? 0 : i;   
    $('.featureDescription').text(textArray[i]).hide().css("display", "inline-block");
    i++;
  },750);
	
  // Support Page Submit Animation
  $(".button-success").click(function() {
    var empty = $('.valueCheck').filter(function() {
      return this.value === "";
    });
    if(empty.length) {
      alert("Not all input boxes have been filled out.");
    }
	else {
	  $(".preloader").addClass("show").fadeIn();
	  function thankYouVisiblity() {
        if($('.thankyou_message').is(":visible")) {
          $(".preloader").removeClass("show");
		  $(".thankyou_message img").addClass("animated heartBeat")
        }
      }
      window.setInterval(thankYouVisiblity, 100);
	}
  });
	
  // Load Partials
  $(".header").load("/partials/header.html");
  $(".liveChat").load("/partials/tawk.html");
  $(".owlActivation").load("/partials/owlActivation.html");
  $(".socialMediaIcons").load("/partials/socialMediaIcons.html");
	
  // Theme Package Scroll Animation
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).on('scroll', function() {
    $('.themePackageImage').each(function() {
      if (isScrolledIntoView($(this))) {
        var $li = $(this);
        $li.addClass('animated swing');
	  }
    });
  });
	
  // Theme Categories
  $(".themeCategoryAll").on("click", function() {
	$(".themeDescription").hide();
    $(".theme").show();	
  });
  
  $(".themeCategoryBlog").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themeBlog, .themeBlog").show();	
  });
  
  $(".themeCategoryBusiness").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themeBusiness, .themeDescriptionBusiness").show();	
  });
  
  $(".themeCategoryEducation").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themeEducation, .themeEducation").show();	
  });
  
  $(".themeCategoryMagazine").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themeMagazine, .themeMagazine").show();	
  });
  
  $(".themeCategoryPortfolio").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themePortfolio, .themeDescriptionPortfolio").show();	
  });
  
  $(".themeCategoryProfile").on("click", function() {
    $(".theme, .themeDescription").hide();
    $(".themeProfile, .themeDescriptionProfile").show();	
  });

  // Sticky Sidebar
  $('.themeProductContent, .themeProductStats').theiaStickySidebar({
    additionalMarginTop: 100,
	additionalMarginBottom: 20
  });
  
  // Sticky Sidebar Bottom Content Animation
  if ($(".themeProductStats")[0]){
	  
    var $header = $('.themeProductStats');
  
    $(window).scroll(function () { 
  
      if ($header.offset().top - $(this).scrollTop() >= 100) {
        $(".themeProductStickBottom").removeClass('show');
      } 
	  else if ($header.offset().top - $(this).scrollTop() < 100) {
        $(".themeProductStickBottom").addClass('show');
      }
    });
  }
  
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
    $('.header').toggleClass('slide');
    $('.hamburger span').toggleClass('fade');
    $('.hamburger').toggleClass('rotate');
  });
  
  // Theme Search  
  $("#filterText").on("keyup", function() {
   var key = this.value;
    $(".themeName").each(function() {
       var $this = $(this).parent().parent();
       $this.toggle($(this).text().toLowerCase().indexOf(key.toLowerCase()) >= 0);
    });
	$(".theme").addClass("show animated fadeIn");
  });
  
  // Widget Search
  $("#filterText").on("keyup", function() {
    var key = this.value;
    $(".widgetTitle").each(function() {
      var $this = $(this).parent();
      $this.toggle($(this).text().toLowerCase().indexOf(key.toLowerCase()) >= 0);
    });
	$(".widget").addClass("show animated fadeIn");
  });
  
  // FAQ Search
  $("#filterText").on("keyup", function() {
    var key = this.value;
    $(".question").each(function() {
      var $this = $(this);
      $this.toggle($(this).text().toLowerCase().indexOf(key.toLowerCase()) >= 0);
    });
	$(".question").addClass("show animated fadeIn");
  });
	
});