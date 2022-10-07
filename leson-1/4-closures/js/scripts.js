window.addEventListener('load', function(){
	let some = document.querySelector('.some');
	let other = document.querySelector('.other');
	let addGreenBtn = document.querySelector('.addGreen');
	let colors = ['#ff0', '#f00', '#00f'];

	some.addEventListener('click', function(){
		let num = Math.floor(Math.random() * colors.length);
		some.style.color = colors[num];
	});

	other.addEventListener('mouseenter', function(){
		let num = Math.floor(Math.random() * colors.length);
		other.style.color = colors[num];
	});

	addGreenBtn.addEventListener('click', function(){
		colors.push('#0f0');
	});
});
/* 
some.addEventListener('click', function(){
	changeColor(some);
});

other.addEventListener('mouseenter', function(){
	changeColor(other);
});

function changeColor(el){
	let num = Math.floor(Math.random() * colors.length);
	el.style.color = colors[num];
}
 */




/* 
div.addEventListener('click', fn1)
div.addEventListener('click', fn2)
div.addEventListener('mouseenter', fn3)

div.#listeners = {};

div.#listeners.click = [];
div.#listeners.click.push(fn1);
div.#listeners.click.push(fn2);


div.#listeners.mouseenter = [];
div.#listeners.click.push(fn3);

div.#listeners.click.forEach(fn => fn())
 */

/*
let x = 100;

function some(){
	let x = 10;

	function other(){
		let x = 1;
		console.log(x);
	}

	other();
}

some();/*  */