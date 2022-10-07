window.addEventListener('load', function(){

	let btnPrev = document.querySelector('.gallery .buttons .prev');
	let btnNext = document.querySelector('.gallery .buttons .next');

	let images = document.querySelectorAll('.gallery .photos img');
	let i = 0;
	let rate = 500;
	let animated = false;

	let keyframesToRight = [
		{ opacity: 1, transform: 'translateX(0)' },
		{ opacity: 0, transform: 'translateX(100%)' }
	];

	let keyframesToLeft = [
		{ opacity: 1, transform: 'translateX(0)' },
		{ opacity: 0, transform: 'translateX(-100%)' }
	];

	btnPrev.addEventListener('click', function(){
		if(animated){
			return;
		}

		let slideHide = images[i];
		i--;

		if(i < 0){
			i = images.length - 1;
		}

		//i = (i > 0) ? (i - 1) : (images.length - 1); // insteadof 26-30
		switchSlides(slideHide, images[i], true);
	});

	btnNext.addEventListener('click', function(){
		if(animated){
			return;
		}

		let slideHide = images[i];
		i++;

		if(i >= images.length){
			i = 0;
		}

		switchSlides(slideHide, images[i], false);
	});

	function switchSlides(slideHide, slideShow, isPrev){
		animated = true;

		slideHide.classList.remove('showed');
		slideHide.animate(isPrev ? keyframesToRight : keyframesToLeft, { duration: rate });

		slideShow.classList.add('showed');
		let animate = slideShow.animate(isPrev ? keyframesToLeft : keyframesToRight, { 
			duration: rate, direction: 'reverse' 
		});

		animate.addEventListener('finish', function(){
			animated = false;
		});
	}

});