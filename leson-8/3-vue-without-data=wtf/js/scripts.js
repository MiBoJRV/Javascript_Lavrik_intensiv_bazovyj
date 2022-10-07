window.addEventListener('load', function(){

	Vue.createApp({
		data(){
			return {
				name: ''
			}
		}
	}).mount('.sample');

	$('.faq .ask').on('click', function(){
		$(this).nextAll('.answer').slideToggle();
	});

});