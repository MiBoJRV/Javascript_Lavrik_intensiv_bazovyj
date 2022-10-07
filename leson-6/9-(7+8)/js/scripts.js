window.addEventListener('load', function(){
	let timer1 = createTimer('.timer1', 10);
	let timer2 = createTimer('.timer2', 100);
	console.log(timer1);
	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

function createTimer(selector, time){
	let timer = {
		box: document.querySelector(selector),
		time: time,
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

	timer.start();
	return timer;
}