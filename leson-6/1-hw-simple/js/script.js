window.addEventListener('load', function(){

	let btnPrev = document.querySelector('.gallery .buttons .prev');
	let btnNext = document.querySelector('.gallery .buttons .next');

	let images = document.querySelectorAll('.gallery .photos img');
	let i = 0;
	let rate = 500;

	btnPrev.addEventListener('click', function(){
		images[i].classList.remove('showed');
		images[i].animate([
			{ opacity: 1, transform: 'translateX(0)' },
			{ opacity: 0, transform: 'translateX(100%)' }
		], { duration: rate });

		i--;

		if(i < 0){
			i = images.length - 1;
		}

		images[i].classList.add('showed');
		images[i].animate([
			{ opacity: 0, transform: 'translateX(-100%)' },
			{ opacity: 1, transform: 'translateX(0)' }
		], { duration: rate });
	});

	btnNext.addEventListener('click', function(){
		images[i].classList.remove('showed');
		images[i].animate([
			{ opacity: 1, transform: 'translateX(0)' },
			{ opacity: 0, transform: 'translateX(-100%)' }
		], { duration: rate });
		
		i++;

		if(i >= images.length){
			i = 0;
		}

		images[i].classList.add('showed');
		images[i].animate([
			{ opacity: 0, transform: 'translateX(100%)' },
			{ opacity: 1, transform: 'translateX(0)' }
		], { duration: rate });
	});

});