'use strict';

// This is the main JavaScript file

document.addEventListener('DOMContentLoaded', function () {
	console.log('Welcome to Trillium Website');
});

document.addEventListener('DOMContentLoaded', function () {
	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Add a click event on each of them
	$navbarBurgers.forEach(function (el) {
		el.addEventListener('click', function () {
			// Get the target from the "data-target" attribute
			var target = el.dataset.target;
			var $target = document.getElementById(target);

			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
	});
});

var swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});