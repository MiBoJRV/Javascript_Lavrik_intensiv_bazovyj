window.addEventListener('load', function(){
	let timer1 = {
		box: document.querySelector('.timer1'),
		time: 10,
		interval: null,
		start: function(){
			this.interval = setInterval(() => { /* some magic */
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

	timer1.start();
	console.log(timer1);

	let timer2 = {
		box: document.querySelector('.timer2'),
		time: 100,
		interval: null,
		start: function(){
			this.interval = setInterval(() => { /* some magic */
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

	timer2.start();
	console.log(timer2);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});


let box = document.querySelector('.timer1');
let time = 10;
let interval = null;

function start(){
	interval = setInterval(function(){
		tick();
	}, 1000);
}

function stop(){
	clearInterval(interval);
}

function tick(){
	time--;
	box.innerHTML = time;

	if(time < 1){
		stop();
	}
}