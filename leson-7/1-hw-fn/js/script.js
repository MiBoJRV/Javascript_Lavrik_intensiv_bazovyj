window.addEventListener('load', function(){

	createSlider('.gallery-1');
	createSlider('.gallery-2'); 

});

function createSlider(selector){
	let rootElem = document.querySelector(selector);
	let btnPrev = rootElem.querySelector('.buttons .prev');
	let btnNext = rootElem.querySelector('.buttons .next');

	let images = rootElem.querySelectorAll('.photos img');
	let i = 0;

	btnPrev.addEventListener('click', function(){
		images[i].classList.remove('showed');
		i--;

		if(i < 0){
			i = images.length - 1;
		}

		images[i].classList.add('showed');
	});

	btnNext.addEventListener('click', function(){
		images[i].classList.remove('showed');
		i++;

		if(i >= images.length){
			i = 0;
		}

		images[i].classList.add('showed');
	});
}

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */