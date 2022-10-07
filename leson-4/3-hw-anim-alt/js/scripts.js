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

	let btnUp = document.querySelector('.btnUp');

	btnUp.addEventListener('click', function(e){
		scrollToY(0);
	});

	window.addEventListener('scroll', function(e){
		let pos = window.pageYOffset;
		
		if(pos > window.innerHeight){
			btnUp.classList.add('btnUp-open');
		}
		else{
			btnUp.classList.remove('btnUp-open');
		}
	});

	function scrollToId(id){
		let target = document.querySelector(id);
		let styles = window.getComputedStyle(target);

		if(target !== null){
			let pos = elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);
			scrollToY(pos);
		}
	}

});

function scrollToY(pos){
	window.scrollTo({
		top: pos,
		behavior: "smooth"
	});
}

function elemOffsetTop(node){
	let coords = node.getBoundingClientRect();
	return coords.top + window.pageYOffset;
}