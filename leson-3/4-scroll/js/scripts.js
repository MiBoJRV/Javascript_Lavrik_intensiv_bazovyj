window.addEventListener('load', function(){
	let menu = document.querySelector('.menu');
	
	if(window.location.hash != ''){
		scrollToId(window.location.hash);
	}

	menu.addEventListener('click', function(e){
		if(e.target.classList.contains('menu__link')){
			e.preventDefault();
		
			let link = e.target;
			scrollToId(link.hash);

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
		}
	});
});

function scrollToId(id){
	let target = document.querySelector(id);

	if(target !== null){
		let pos = target.offsetTop - 70;

		window.scrollTo({
			top: pos,
			behavior: "smooth"
		});
	}
}
