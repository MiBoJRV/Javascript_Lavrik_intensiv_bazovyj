window.addEventListener('load', function(){
	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 100);
	console.log(timer1);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	console.log(timer1 instanceof Timer);
	console.log(timer1 instanceof Element);
});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval = null;
		this.start();
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	stop(){
		clearInterval(this.interval);
	}

	tick(){
		this.time--;
		this.box.innerHTML = this.time;

		if(this.time < 1){
			this.stop();
		}
	}
}