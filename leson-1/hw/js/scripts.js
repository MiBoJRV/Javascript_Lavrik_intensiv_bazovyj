window.addEventListener('load', function () {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation');

    btn.addEventListener('click', function () {
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let op = oper.value;
        let total = 'Неизвестная операция';

        if (op === 'sum') {
            total = num1 + num2;
        } else if (op === 'sub') {
            total = num1 - num2;
        } else if (op === 'mult') {
            total = num1 * num2;
        } else if (op === 'div') {
            total = num1 / num2;
        }
        if(isNaN(total)){
            total = 'Заполните поля - введите нормальные числа';
        }
        res.innerHTML = total;
        btn.disabled = true;

    });

    inp1.addEventListener('input', btnEnable);
    inp2.addEventListener('input', btnEnable);
    oper.addEventListener('input', btnEnable);
    // [inp1, inp2, oper].forEach(el => el.addEventListener('input', btnEnable))

    inp1.addEventListener('input', cleanInput);
    inp2.addEventListener('input', cleanInput);

    function btnEnable() {
        btn.disabled = false;
    }

    function cleanInput(){
        this.value = this.value.replace(/[^\d]/g, '')
    }
});

// document.getElementById("calc").onchange = function(){
// 	let value = document.getElementById("calc").value;
// 	console.log(this.value)
// };
// document.getElementById("calc").onchange = function(){
// 	valueSel = document.getElementById("calc").value;
// 	console.log(this.value)
// };
// btn.addEventListener('click', function(){
//
// 	// let sum = parseInt(inp1.value)  +  parseInt(inp2.value);
// 	let sum = inp1.value + valueSel + inp2.value;
// 	res.innerHTML = sum;
// });




