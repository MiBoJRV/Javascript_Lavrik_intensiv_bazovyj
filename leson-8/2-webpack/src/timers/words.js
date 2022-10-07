import NiceTimer from './nice';

export default class WordsTimer extends NiceTimer{
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