// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    var adlibApp = angular.module('adlibApp', []);
    adlibApp.controller('photosCtrl', ['$scope', function ($scope) {
      $scope.NB_PHOTOS = 9;
    	$scope.myInterval = 5000;
      	$scope.noWrapSlides = false;
      	var slides = $scope.slides = [];

      	for (var i=1; i<=$scope.NB_PHOTOS; i++) {
    		$scope.slides.push({
            index: i - 1,
    	    	image: 'img/album/' + i + '.jpg',
            active: ''
    	    });
      	}
        $scope.slides[0].active = 'active';
    }]);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
