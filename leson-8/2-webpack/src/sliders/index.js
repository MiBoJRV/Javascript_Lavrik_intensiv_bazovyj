export default class Slider{
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