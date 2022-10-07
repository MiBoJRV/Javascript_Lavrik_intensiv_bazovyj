import Timer from './timer';

export default class NiceTimer extends Timer{
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