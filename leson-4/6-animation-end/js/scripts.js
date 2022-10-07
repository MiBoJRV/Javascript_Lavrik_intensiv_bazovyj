window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		// ask.nextElementSibling
		let answer = ask.parentNode.querySelector('.answer');
		
		if(answer.classList.contains('open')){
			answer.classList.remove('fadeIn');
			answer.classList.add('fadeOut');

			function removeOpenClass(){
				console.log('here');
				answer.classList.remove('open');
				answer.removeEventListener('animationend', removeOpenClass);
			}

			answer.addEventListener('animationend', removeOpenClass);
		}
		else{
			answer.classList.remove('fadeOut');
			answer.classList.add('open');
			answer.classList.add('fadeIn');
		}
	}

});