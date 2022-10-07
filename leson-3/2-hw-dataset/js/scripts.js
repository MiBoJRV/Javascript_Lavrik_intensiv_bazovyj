window.addEventListener('load', function () {
	let patterns = {
		notEmpty: /.+/,
		phone: /^\d{7,15}$/,
		email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
	}

	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', (e) => {
		let hasError = false;

		for (let i = 0; i < inputs.length; i++) {
			let inp = inputs[i];
			let val = inp.value.trim();
			let name = inp.dataset.valid;
			let pattern = patterns[name];
			//console.log(val, name, pattern);
			if(!pattern.test(val)){
				inputs[i].classList.add("err");
				hasError = true;
			}
		}

		if(hasError){
			e.preventDefault();
			// alert('Заполните все поля!');
		}
	})

	form.addEventListener('focusin', function (e) {
		if (e.target.classList.contains('check')) {
			e.target.classList.remove('err');
		}
	});
});

/*
let en2ru = { night: 'ночь', morning: 'утро', day: 'день', evening: 'вечер' }
let word = 'night';
let wordRU = en2ru[word];
console.log(wordRU);
*/

/* let word = 'night'; // morning, day, evening
let wordRU;

if(word === 'night'){
	wordRU = 'ночь';
}
else if(word === 'morning'){
	wordRU = 'утро';
}
else if(word === 'day'){
	wordRU = 'день';
}
else if(word === 'evening'){
	wordRU = 'вечер';
}  */