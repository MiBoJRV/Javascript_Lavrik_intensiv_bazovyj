window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.parentNode.querySelector('.answer');

		toogleItemAnim(
			answer, 
			500,
			[
				{ opacity: 0, height: 0 },
				{ opacity: 1, height: function(el){return el.clientHeight + 'px'} }
			], 
			[
				{ opacity: 1, height: function(el){return el.clientHeight + 'px'} },
				{ opacity: 0, height: 0 }
			]
		);

		/* toogleItemAnim(
			answer, 
			500,
			[
				{ opacity: 0, transform: 'translateX(-100px)' },
				{ opacity: 1, transform: 'translateX(0)' }
			], 
			[
				{ opacity: 1, transform: 'translateX(0)' },
				{ opacity: 0, transform: 'translateX(100px)' }
			]
		); */
	}

/* 	let toggleBox = document.querySelector('.toggleBox');
	let box = document.querySelector('.box');

	toggleBox.addEventListener('click', function(){
		simpleAnimToggle(box, [
			{ opacity: 1, transform: 'rotate(0) scale(1)' },
			{ opacity: 0, transform: 'rotate(500deg) scale(0.5)' }
		], 500);
	}) */

});


function toogleItemAnim(el, rate, keyframesToShow, keyframesToHide = null){
	if(el.jsAnim){
		return;
	}

	el.jsAnim = true;

	if(keyframesToHide === null){
		keyframesToHide = [...keyframesToShow].reverse();
	}

	if(el.classList.contains('open')){
		let animation = el.animate(
			compileKeyframes(el, keyframesToHide),
			{ duration: rate }
		);
		
		animation.addEventListener('finish', function(){
			el.classList.remove('open');
			el.jsAnim = false;
		});
	}
	else{
		el.classList.add('open');

		let animation = el.animate(
			compileKeyframes(el, keyframesToShow),
			{ duration: rate }
		);

		animation.addEventListener('finish', function(){
			el.jsAnim = false;
		});
	}
}

function compileKeyframes(el , keyframes){
	let res = [];

	for(let i = 0; i < keyframes.length; i++){
		let frame = keyframes[i];
		let realFrame = {};

		for(let name in frame){
			realFrame[name] = typeof frame[name] === 'function' ? 
									frame[name](el) : 
									frame[name];
		}

		res.push(realFrame);
	}
	
	return res;
}