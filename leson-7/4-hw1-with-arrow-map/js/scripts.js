window.addEventListener('load', function(){
   let calcFn = {
		sum: (a, b) => a + b,
		sub: (a, b) => a - b,
		mult: (a, b) => a * b,
		div: (a, b) => a / b,
		mod: (a, b) => a % b
	}

	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let oper = document.querySelector('.operation');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let total = calcFn[oper.value](num1, num2);

		/*
			let op = oper.value;
			let fn = calcFn[op];
			let total = fn(num1, num2);
		*/

		if(isNaN(total)){
			total = 'Заполните поля - введите нормальные числа';
		}

		res.innerHTML = total;
		btn.disabled = true;
	});

	[inp1, inp2, oper].forEach(el => el.addEventListener('input', btnEnable));
	[inp1, inp2].forEach(el => el.addEventListener('input', cleanInput));
	
	function btnEnable(){
		btn.disabled = false;
	}

	function cleanInput(){
		this.value = this.value.replace(/[^\d]/g, '')
	}

});


