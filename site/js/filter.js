let articles = document.querySelectorAll(".article");
let topic, format, area, time;

let ulTopic = document.getElementById('leftTopic');

ulTopic.onclick = function(event) {

	let target = event.target;
	let selectedTopic = target.innerHTML;
	console.log();

	for (let i = 0; i < articles.length; i++) {

		topic = articles[i].dataset.topic;

		if (topic.toLowerCase() !== selectedTopic.toLowerCase()) {

			articles[i].style.display = "none";

		} else {

			articles[i].style.display = "inline-block";

		}

	}

}

let ulFormat = document.getElementById('leftFormat');

ulFormat.onclick = function(event) {

	let target = event.target;
	let selectedFormat = target.innerHTML;
	console.log(target.id);

	for (let i = 0; i < articles.length; i++) {

		format = articles[i].dataset.format;

		if (format.toLowerCase() !== selectedFormat.toLowerCase()) {

			articles[i].style.display = "none";

		} else {

			articles[i].style.display = "inline-block";

		}

	}

}

let ulArea = document.getElementById('leftArea');

ulArea.onclick = function(event) {

	let target = event.target;
	let selectedArea = target.innerHTML;

	for (let i = 0; i < articles.length; i++) {

		area = articles[i].dataset.area;

		if (area.toLowerCase() !== selectedArea.toLowerCase()) {

			articles[i].style.display = "none";

		} else {

			articles[i].style.display = "inline-block";

		}

	}

}

let ulTime = document.getElementById('leftTime');

ulTime.onclick = function(event) {

	let target = event.target;
	let selectedTime = target.innerHTML;

	for (let i = 0; i < articles.length; i++) {

		time = articles[i].dataset.time;

		if (time.toLowerCase() !== selectedTime.toLowerCase()) {

			articles[i].style.display = "none";

		} else {

			articles[i].style.display = "inline-block";

		}

	}

}









