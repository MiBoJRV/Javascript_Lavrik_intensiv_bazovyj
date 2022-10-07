window.addEventListener('load', function(){
	createTimer('.timer1', 10);
	createTimer('.timer2', 100);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		
	});
});

function createTimer(selector, time){
	let box = document.querySelector(selector);
	box.innerHTML = time;

	let interval = setInterval(function(){
		time--;
		box.innerHTML = time;

		if(time < 1){
			clearInterval(interval);
		}
	}, 1000);
}