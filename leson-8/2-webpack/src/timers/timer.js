export default class Timer{
	#interval = null;

	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.render();
		this.start();
	}

	start(){
		this.#interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	stop(){
		clearInterval(this.#interval);
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