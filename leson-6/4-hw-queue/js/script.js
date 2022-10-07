window.addEventListener('load', function(){

	let btnPrev = document.querySelector('.gallery .buttons .prev');
	let btnNext = document.querySelector('.gallery .buttons .next');

	let images = document.querySelectorAll('.gallery .photos img');
	let i = 0;
	let rate = 500;
	let animated = false;

	let keyframesToRight = [
		{ transform: 'rotate(0) scale(1)', opacity: 1 },
		{ transform: 'rotate(-820deg) scale(0.2)', opacity: 0.2 }
	];

	let keyframesToLeft = [
		{ transform: 'rotate(0) scale(1)', opacity: 1 },
		{ transform: 'rotate(820deg) scale(0.2)', opacity: 0.2 }
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
		let animateShow = slideHide.animate(isPrev ? keyframesToRight : keyframesToLeft, { duration: rate });

		animateShow.addEventListener('finish', function(){
			slideShow.classList.add('showed');
			let animateShow = slideShow.animate(isPrev ? keyframesToLeft : keyframesToRight, { 
				duration: rate, direction: 'reverse' 
			});
	
			animateShow.addEventListener('finish', function(){
				animated = false;
			});
		});
		
	}

});