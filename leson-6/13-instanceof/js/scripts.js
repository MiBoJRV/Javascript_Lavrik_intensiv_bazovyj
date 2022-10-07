window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = getNextElement(ask);
		console.log(answer);
		
		if(answer.classList.contains('open')){
			let animate = answer.animate([
				{ opacity: 1, transform: 'translateX(0)' },
				{ opacity: 0, transform: 'translateX(100px)' }
			], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');
		}
	}

});

function getNextElement(el){
	if(!el){
		return null;
	}

	if(el.nextSibling instanceof HTMLElement){
		return el.nextSibling;
	}

	return getNextElement(el.nextSibling);
}

/* function delegate(node: HTMLElement, eventname: String, selector: String, callback: Function){

} */