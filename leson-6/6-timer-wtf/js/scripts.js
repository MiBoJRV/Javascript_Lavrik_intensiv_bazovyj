window.addEventListener('load', function(){
	let box1 = document.querySelector('.timer1');
	let time1 = 10;

	box1.innerHTML = time1;

	let interval1 = setInterval(function(){
		time1--;
		box1.innerHTML = time1;

		if(time1 < 1){
			clearInterval(interval1);
		}
	}, 1000);

	let box2 = document.querySelector('.timer2');
	let time2 = 100;

	box2.innerHTML = time2;

	let interval2 = setInterval(function(){
		time2--;
		box2.innerHTML = time2;

		if(time2 < 1){
			clearInterval(interval2);
		}
	}, 1000);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		clearInterval(interval2);
	});

});