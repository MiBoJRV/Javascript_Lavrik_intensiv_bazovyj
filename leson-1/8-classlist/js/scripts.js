window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', toggleActive);
	}
});

function toggleActive(){
	if(this.classList.contains('item-active')){
		this.classList.remove('item-active');
		this.style.color = 'inherit';
	}
	else{
		this.classList.add('item-active');
		this.style.color = this.dataset.color;
	}
}

/*
	classList
		add
		remove
		contains
		toggle

		toggle:
			if(contains)
				remove
			else
				add
*/