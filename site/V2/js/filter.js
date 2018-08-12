//*** CONTENT FILTER ***

let topic, format, area, time;

let articles = document.querySelectorAll(".article");

let ulTime = document.getElementById('leftTime');
let ulTopic = document.getElementById('leftTopic');
let ulArea = document.getElementById('leftArea');
let ulFormat = document.getElementById('leftFormat');

ulTime.onclick = function(event) {

	let target = event.target;
	time = target.dataset.tags;

	let li = this.getElementsByTagName("a");
		
	for (let i = 0; i < li.length; i++) {

		li[i].style.color = "black";
		target.style.color = "red";

	}

	updateArticles();
	console.log("time is " + time);

}

ulTopic.onclick = function(event) {

	let target = event.target;
	topic = target.dataset.tags;

	let li = this.getElementsByTagName("a");
		
	for (let i = 0; i < li.length; i++) {

		li[i].style.color = "black";
		target.style.color = "red";

	}

	updateArticles();
	console.log(target);
	console.log("topic is " + topic);

}

ulArea.onclick = function(event) {

	let target = event.target;
	area = target.dataset.tags;

	let li = this.getElementsByTagName("a");

	for (let i = 0; i < li.length; i++) {

		li[i].style.color = "black";
		target.style.color = "red";

	}

	updateArticles();
	console.log("area is " + area);

}

ulFormat.onclick = function(event) {

	let target = event.target;
	format = target.dataset.tags;

	let li = this.getElementsByTagName("a");
		
	for (let i = 0; i < li.length; i++) {

		li[i].style.color = "black";
		target.style.color = "red";

	}

	updateArticles();
	console.log("format is " + format);

}

function updateArticles() {

	for (let i = 0; i < articles.length; i++) {

		if 	((time && !articles[i].dataset.tags.includes(time)) ||
			(topic && !articles[i].dataset.tags.includes(topic)) ||
			(area && !articles[i].dataset.tags.includes(area)) || 
			(format && !articles[i].dataset.tags.includes(format)))
		{

			articles[i].style.display = "none";

		} else {

			articles[i].style.display = "inline-block";

		}

	}

}
