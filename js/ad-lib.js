// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

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

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });

    var adlibApp = angular.module('adlibApp', []);

    adlibApp.controller('photosCtrl', ['$scope', '$http', function ($scope, $http) {
  		var slides = $scope.slides = [];
      $http.get('json/album.json').success(function(data) {
        $scope.slides = data;
        $scope.slides[0].active = 'active';
      });
    }]);

    adlibApp.controller('musicCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('json/player.json').success(function(data) {
        console.log("music loaded");
        $scope.musics = data;
        $scope.isPlaying = false;
        $scope.currentMusicInd = 0;
      	$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
      });

      // Lecture d'une chanson
      $scope.play = function () {
        var audio = document.getElementById("audio");
        audio.play();
        $scope.isPlaying = true;
      };
      // Arrêt d'une chanson
      $scope.stop = function () {
        var audio = document.getElementById("audio");
        audio.pause();
        audio.currentTime=0;
        $scope.isPlaying = false;
      };
      // Chanson suivante
    	$scope.next = function () {
    		var audio = document.getElementById("audio");
    		$scope.currentMusicInd ++;
    		if ($scope.currentMusicInd >= $scope.musics.length) {
    			$scope.currentMusicInd = 0;
    		}
    		$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
    		var playing = $scope.isPlaying;
    		$scope.stop();
    		audio.src = $scope.currentMusic.source;
    		if (playing) {
    			audio.load();
    			$scope.play();
    		}
    	};
    	// Chanson précédente
    	$scope.previous = function () {
    		var audio = document.getElementById("audio");
    		$scope.currentMusicInd --;
    		if ($scope.currentMusicInd < 0) {
    			$scope.currentMusicInd = $scope.musics.length - 1;
    		}
    		$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
    		var playing = $scope.isPlaying;
    		$scope.stop();
    		audio.src = $scope.currentMusic.source;
    		if (playing) {
    			audio.load();
    			$scope.play();
    		}
    	};

    }]);

})(jQuery); // End of use strict
