(function() {
    
    
    var navToggle = $('.nav-toggle');
    
    navToggle.on('click', openNavDrawer);
    
    function openNavDrawer(event) {
        event.preventDefault();	
		$('.nav').toggleClass('nav--open');
		$('.main').toggleClass('main--open');
    }
    
})();