'use strict';

// This is the main JavaScript file without "use strict"

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

var navbar = document.querySelector('.navbar-fixed');
var logoDarkTheme = document.querySelector('.logo-darkTheme');
var logoLightTheme = document.querySelector('.logo-lightTheme');
var NavbarItem1 = document.querySelector('.navbar-item1');
var NavbarItem2 = document.querySelector('.navbar-item2');
var NavBurger = document.querySelector('.navbar-burger');
var NavbarMenu = document.querySelector('.navbar-menu');

window.onscroll = function () {
	if (window.scrollY > 10) {
		navbar.classList.add('navbar-scrolled');
		logoDarkTheme.style.display = 'none';
		logoLightTheme.style.display = 'block';
		// NavbarItem1.style.color = '#000';
		// NavbarItem2.style.color = '#000';
		// NavbarMenu.style.color = '#000';
		NavBurger.style.color = '#000';
	} else {
		navbar.classList.remove('navbar-scrolled');
		logoDarkTheme.style.display = 'block';
		logoLightTheme.style.display = 'none';
		// NavbarItem1.style.color = '#fff';
		// NavbarItem2.style.color = '#fff';
		// NavbarMenu.style.color = '#fff';
		NavBurger.style.color = '#fff';
	}
};