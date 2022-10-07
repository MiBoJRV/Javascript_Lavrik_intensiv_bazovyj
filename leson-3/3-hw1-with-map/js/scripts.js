window.addEventListener('load', function(){
   let calcFn = {
		sum: function(a, b){ return a + b },
		sub: function(a, b){ return a - b },
		mult: function(a, b){ return a * b },
		div: function(a, b){ return a / b },
		mod: function(a, b){ return a % b }
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

	inp1.addEventListener('input', btnEnable);
	inp2.addEventListener('input',btnEnable);
	oper.addEventListener('input', btnEnable);
	// [inp1, inp2, oper].forEach(el => el.addEventListener('input', btnEnable))

	inp1.addEventListener('input', cleanInput);
	inp2.addEventListener('input', cleanInput);
	
	function btnEnable(){
		btn.disabled = false;
	}

	function cleanInput(){
		this.value = this.value.replace(/[^\d]/g, '')
	}

});


