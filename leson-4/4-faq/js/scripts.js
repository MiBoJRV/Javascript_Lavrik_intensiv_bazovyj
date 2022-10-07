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
		answer.classList.toggle('open');
	}

});