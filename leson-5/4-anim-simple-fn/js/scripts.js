window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.parentNode.querySelector('.answer');
		simpleAnimToggle(answer, [
			{ opacity: 1, transform: 'translateX(0)' },
			{ opacity: 0, transform: 'translateX(-100px)' }
		], 500);
	}

	let toggleBox = document.querySelector('.toggleBox');
	let box = document.querySelector('.box');

	toggleBox.addEventListener('click', function(){
		simpleAnimToggle(box, [
			{ opacity: 1, transform: 'rotate(0) scale(1)' },
			{ opacity: 0, transform: 'rotate(500deg) scale(0.5)' }
		], 500);
	})

});

function simpleAnimToggle(el, hideKeyframes, duration){
	if(el.appAnimated){
		return;
	}

	el.appAnimated = true;
	
	if(el.classList.contains('open')){
		let animate = el.animate(hideKeyframes, { duration: duration });

		animate.addEventListener('finish', function(){
			el.classList.remove('open');
			el.appAnimated = false;
		});
	}
	else{
		el.classList.add('open');
		let animate = el.animate(hideKeyframes, { duration: duration, direction: 'reverse' });

		animate.addEventListener('finish', function(){
			el.appAnimated = false;
		});
	}
}