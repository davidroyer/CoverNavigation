(function() {
    
    
    var navToggle = $('.nav-trigger');
    
    navToggle.on('click', openNavDrawer);
    
    function openNavDrawer(event) {
        event.preventDefault();	
        $('body').toggleClass('navigation-is-open');
        $('.nav__overlay').toggleClass('navigation-is-open');
        $('html').toggleClass('navigation-is-open');
		$('.nav').toggleClass('nav--open');
		$('.main').toggleClass('main--open');
    }
    
})();