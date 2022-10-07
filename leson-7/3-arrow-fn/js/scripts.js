/* function sum(a, b){
	return a + b;
}

let sum = function(a, b){
	return a + b;
} 
*/

/* let sum = (a, b) => {
	return a + b;
}  */

/* let sum = (a, b) => a + b;
let double = n => n * 2;

let res = [1, 2, 3].filter(num => num > 2);
console.log(res); */

window.addEventListener('load', function(){
	document.querySelector('.timer1').addEventListener('click', function(){
		setTimeout(() => {
			this.style.color = 'red';
		}, 1000);
	});
});