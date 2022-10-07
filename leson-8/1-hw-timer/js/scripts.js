window.addEventListener('load', function(){
	let timer1 = new Timer('.timer1', 10);
	let timer2 = new WordsTimer('.timer2', 5000);
	//console.log(timer1);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval = null;
		this.render();
		this.start();
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 100);
	}

	stop(){
		clearInterval(this.interval);
	}

	tick(){
		this.time--;
		this.render();

		if(this.time < 1){
			this.stop();
		}
	}

	render(){
		this.box.innerHTML = this.time;
	}
}

class NiceTimer extends Timer{
	splitTime(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs / 60);
		let s = hs % 60;
		return { h, m, s };
	}

	render(){
		let t = this.splitTime();
		this.box.innerHTML = `${t.h}:${t.m}:${t.s}`;
	}
}

class WordsTimer extends NiceTimer{
	wordVariants(num, variant1, variant234, variantOther){
		let timeMod100 = num % 100; // последние две цифры числа
		let timeMod10 = num % 10; // последняя цифра числа
		let word = '';
		
		if(timeMod100 >= 11 && timeMod100 <= 14){
			word = variantOther;
		}
		else if(timeMod10 == 1){
			word = variant1;
		}
		else if(timeMod10 >= 2 && timeMod10 <= 4){
			word = variant234;
		}
		else{
			word = variantOther;
		}
		
		return word;
	}
	

	render(){
		let t = this.splitTime();
		let hw = this.wordVariants(t.h, 'час', 'часа', 'часов');
		let mw = this.wordVariants(t.m, 'минута', 'минуты', 'минут');
		let sw = this.wordVariants(t.s, 'секунда', 'секунды', 'секунд');
		this.box.innerHTML = `${t.h} ${hw} ${t.m} ${mw} ${t.s} ${sw} `;
	}
}



