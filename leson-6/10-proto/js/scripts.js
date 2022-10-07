window.addEventListener('load', function(){
	let baseTimer = {
		start: function(){
			this.interval = setInterval(() => {
				this.tick();
			}, 1000);
		},
		stop: function(){
			clearInterval(this.interval);
		},
		tick: function(){
			this.time--;
			this.box.innerHTML = this.time;

			if(this.time < 1){
				this.stop();
			}
		}
	}

	let timer1 = {
		box: document.querySelector('.timer1'),
		time: 10,
		interval: null,
		__proto__: baseTimer
	}

	let timer2 = {
		box: document.querySelector('.timer2'),
		time: 100,
		interval: null,
		__proto__: baseTimer
	}

	timer1.start();
	console.log(timer1);
	timer2.start();
	console.log(timer2);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

/* 
let wildCat = {
	typeOfFood: 'predator',
	run: function(){

	},
	findEat: function(){

	}
}

let pumaMurzik = {
	age: 2,
	weight: 30,
	length: 90
}

pumaMurzik.__proto__ = wildCat;
console.log(pumaMurzik.typeOfFood) */