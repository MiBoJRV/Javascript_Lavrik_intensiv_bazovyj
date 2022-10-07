window.addEventListener('load', function(){
	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 100);
	console.log(timer1);
	console.log(timer1.#interval);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

class Timer{
	#interval = null;

	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.start();
	}

	start(){
		this.#interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	stop(){
		clearInterval(this.#interval);
	}

	tick(){
		this.time--;
		this.box.innerHTML = this.time;

		if(this.time < 1){
			this.stop();
		}
	}
}