window.addEventListener('load', function(){
	let timer1 = new Timer('.timer1', 10);
	let timer2 = new NiceTimer('.timer2', 5000);
	console.log(timer1);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		console.dir(this.box);
		this.time = time;
		this.interval = null;
		this.render();
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
		this.render();

		if(this.time < 1){
			this.stop();
		}
	}

	render(){
		this.box.innerHTML = this.time;
	}
}

class NiceTimer extends Timer{
	constructor(selector, time){
		super(selector, time);
	}

	tick(){
		//console.log(this.time);
		super.tick();
	}

	render(){
		// this.time = 5000
		let h = parseInt(this.time / 3600); // 1
		let hs = this.time % 3600; // 1400
		let m = parseInt(hs / 60); // 23
		let s = hs % 60; // 20
		this.box.innerHTML = `${h}:${m}:${s}`;
	}
}

/*

class Cat{
	findEat(){
		while(this.hungry){
			this.findSmallAnimal();
			this.wait();
			this.run();
		}
	}
}

class HomeCat{
	findEat(){
		while(this.hungry){
			this.goToHuman();
			this.sayMyouw();

			if(this.hugnry3days){
				super.findEat();
			}
		}
	}
}


*/