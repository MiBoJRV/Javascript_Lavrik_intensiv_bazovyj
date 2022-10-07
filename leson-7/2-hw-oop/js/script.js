window.addEventListener('load', function(){

	let s1 = new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000);

});

class Slider{
	constructor(selector){
		this.rootElem = document.querySelector(selector);
		this.btnPrev = this.rootElem.querySelector('.buttons .prev');
		this.btnNext = this.rootElem.querySelector('.buttons .next');
		this.images = this.rootElem.querySelectorAll('.photos img');
		this.interval = null;
		this.i = 0;
		this.initControls();
	}
	
	initControls(){
		this.btnPrev.addEventListener('click', () => this.prev());
		this.btnNext.addEventListener('click', () => this.next());
	}

	prev(){
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}

	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}
}

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */