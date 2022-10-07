window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', changeColor);
	}

	// document.querySelectorAll('.box .item').forEach(el => el.addEventListener('click', changeColor))

});

function changeColor(){
	let colors = ['#ff0', '#f00', '#00f'];
	let num = Math.floor(Math.random() * colors.length);
	this.style.color = colors[num];
}