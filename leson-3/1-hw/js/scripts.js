window.addEventListener('load', function () {
	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', (e) => {
		let hasError = false;

		for (let i = 0; i < inputs.length; i++) {
			if(inputs[i].value.trim() == ''){
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