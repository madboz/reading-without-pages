//###### SIDEBAR KEY ######

ulTime.onmouseover = function(event) {

	let target = event.target;

	let key = target.getElementsByClassName("key");
	key[0].style.visibility = "visible";

}

ulTime.onmouseout = function(event) {

	let target = event.target;
	let key = target.getElementsByClassName("key");
	let a = this.getElementsByTagName("a");
	let div = this.getElementsByTagName("div");

	key[0].style.visibility = "hidden";
	// target.style.visibility = "hidden";
	console.log(target);

}

ulTopic.onmouseover = function(event) {

	let target = event.target;
	let key = target.getElementsByClassName("key");
	let a = this.getElementsByTagName("a");
	let div = this.getElementsByTagName("div");

	key[0].style.visibility = "visible";

}

ulTopic.onmouseout = function(event) {

	let target = event.target;
	let key = target.getElementsByClassName("key");
	let a = this.getElementsByTagName("a");
	let div = this.getElementsByTagName("div");

	key[0].style.visibility = "hidden";

}

ulArea.onmouseover = function(event) {

	let target = event.target;

	let key = target.getElementsByClassName("key");
	key[0].style.visibility = "visible";

}

ulArea.onmouseout = function(event) {

	let target = event.target;
	let key = target.getElementsByClassName("key");
	let li = this.getElementsByTagName("a");

	key[0].style.visibility = "hidden";

}

ulFormat.onmouseover = function(event) {

	let target = event.target;

	let key = target.getElementsByClassName("key");
	key[0].style.visibility = "visible";

}

ulFormat.onmouseout = function(event) {

	let target = event.target;
	let key = target.getElementsByClassName("key");
	let li = this.getElementsByTagName("a");

	key[0].style.visibility = "hidden";

}