jQuery(document).ready(function ($) {
 
	$('#contactForm').submit(function() {
		window.open('', 'formpopup', 'width=400,height=220,resizeable,scrollbars');
		this.target = 'formpopup';
	});
	
	//initialise Stellar.js
    $(window).stellar();
 
    //Cache some variables
    var links = $('ul#primaryNav').find('li.navLink a');
	var footerLinks =  $('#page_footer nav').find('li a');
	var sectionOffset = 0;
	mywindow = $(window);
	
	links.click(function (e) {
		e.preventDefault();
        var myLink = $(this).attr('href');
    	var varLink = $(myLink);
		$.waypoints('disable');
		$('footer').waypoint('enable');
		$(myLink).waypoint('enable');
		links.removeClass('active');
		$(this).addClass('active');
		scrollToSection(varLink);
	});
	
	footerLinks.click(function (e) {
		e.preventDefault();
        var myLink = $(this).attr('href');
    	var varLink = $(myLink);
		$.waypoints('disable');
		$('footer').waypoint('enable');
		$(myLink).waypoint('enable');
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href="' + myLink + '"]').addClass('active');
		scrollToSection(varLink);
	});
	
	$('a[href=#top]').click(function (e) {
		e.preventDefault();
		links.removeClass('active');
		$.waypoints('disable');
		$('#mainSlide').waypoint('enable');
		$('html,body').animate({
			scrollTop:0
		}, 2500, function() {
			easing: 'easeInOutQuint';
			$.waypoints('enable');
		});
	});
	
	$('#scrollBtn a').click(function (e) {
		e.preventDefault();
        var myLink = $(this).attr('href');
    	var varLink = $(myLink);
		$.waypoints('disable');
		$('footer').waypoint('enable');
		$(myLink).waypoint('enable');
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href="' + myLink + '"]').addClass('active');
		scrollToSection(varLink);
	});
	
	function scrollToSection(element) {
		if (mywindow.scrollTop() < element.offset().top) {
			$('html,body').animate({
				scrollTop: (element.offset().top + 5)
			}, 2500, function() {
				easing: 'easeInOutQuint';
				$.waypoints('enable');
			});
		}
		else {
			$('html,body').animate({
				scrollTop: (element.offset().top - 5)
			}, 2500, function() {
				easing: 'easeInOutQuint';
				$.waypoints('enable');
			});
		}
    }
	
	$('#mainSlide').waypoint(function (direction) {
		links.removeClass('active');
		$('#scrollBtn a article').removeClass();
		$('#scrollBtn a article').addClass('scrollDown');
		$('#scrollBtn a').attr("href", "#companyLink");
	}, { offset: -635 });
	
	$('#companyLink').waypoint(function (direction) {
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href=#companyLink]').addClass('active');
		$('#scrollBtn a article').removeClass();
		$('#scrollBtn a article').addClass('scrollDown');
		$('#scrollBtn a').attr("href", "#designLink");
	});
	
	$('#designLink').waypoint(function (direction) {
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href=#designLink]').addClass('active');
		$('#scrollBtn a article').removeClass();
		$('#scrollBtn a article').addClass('scrollDown');
		$('#scrollBtn a').attr("href", "#galleryLink");
	});
	
	$('#galleryLink').waypoint(function (direction) {
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href=#galleryLink]').addClass('active');
		$('#scrollBtn a article').removeClass();
		$('#scrollBtn a article').addClass('scrollDown');
		$('#scrollBtn a').attr("href", "#contactUsLink");
	});
	
	$('#contactUsLink').waypoint(function (direction) {
		links.removeClass('active');
		$('ul#primaryNav li.navLink a[href=#contactUsLink]').addClass('active');
	}, { offset: 365 });
	
	$('footer').waypoint(function (direction) {
		$('#scrollBtn a article').css("position","relative");
		$('html').css("background","#ffffff");
		$('#supersized').addClass('hideSlides');
		$('#scrollBtn a article').removeClass();
		$('#scrollBtn a article').addClass('scrollUp');
		$('#scrollBtn a').attr("href", "#mainSlide");
	}, { offset: '100%' });
	
	$('footer').waypoint(function (direction) {
		$('#supersized').removeClass('hideSlides');
		$('#scrollBtn a article').css("position","fixed");
		$('html').css("background","#fffeeb");
	}, { offset: '101%' });
	
});