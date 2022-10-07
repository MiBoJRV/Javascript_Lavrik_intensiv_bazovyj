import './css/base.css';

//import { Timer, WordsTimer } from './timers/timer.js';
import Timer from './timers/timer';
import WordsTimer from './timers/words';

import Slider from './sliders';
import './css/slider.css';

import Swiper from 'swiper';
import 'swiper/css';

let a = 2;
console.log(a);

window.addEventListener('load', function(){
	let timer1 = new Timer('.timer1', 10);
	let timer2 = new WordsTimer('.timer2', 5000);
	console.log(timer1);

	let some = {};
	let num = Math.random();

	if(num > 0.5){
		some.val = num;
	}

	console.log(some.val?.toString());

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	let s1 = new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000);

	let sliderSwiper = new Swiper('.products', {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			520: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			// when window width is >= 480px
			880: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			// when window width is >= 640px
			1040: {
				slidesPerView: 5,
				spaceBetween: 20
			}
		}
		})
	 
	
});