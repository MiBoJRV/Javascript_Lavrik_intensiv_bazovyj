window.addEventListener('load', function(){
	
	let links = document.querySelectorAll('nav a');
	let images = document.querySelectorAll('.gallery img');

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', linkClicked);
	}

	for(let i = 0; i < images.length; i++){
		images[i].addEventListener('click', imageClicked);
		images[i].addEventListener('contextmenu', cancelEvent);
		images[i].addEventListener('mousedown', cancelEvent);
	}

	function imageClicked(e){
		if(!e.ctrlKey){
			for(let i = 0; i < images.length; i++){
				images[i].classList.remove('active');
			}
		}

		this.classList.toggle('active');
	}

	function cancelEvent(e){
		e.preventDefault();
	}

	function linkClicked(e){
		if(!confirm('Сайт не наш, вы уверены, что хотите туда пойти?')){
			e.preventDefault();
		}
	}

});

document.addEventListener('keyup', function(evt){
	console.log(evt);
});
