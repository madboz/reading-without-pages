//*** SESSION STORAGE ***

let titlesArray;
let retrievedData = sessionStorage.getItem("titles");

if (!retrievedData) {

	retrievedData = "[]";

}

titlesArray = JSON.parse(retrievedData);

let pageTitle = document.title;
let pageLinkTitle;

if (pageTitle == "Home") {

	pageLinkTitle = "../index.html"

} else {

	pageLinkTitle = pageTitle.replace(/[^a-zA-Z0-9]/g,"_").toLowerCase() + ".html";

}

let pageLink = '<a href="' + pageLinkTitle +'">' + pageTitle + '</a>';

titlesArray.push(pageLink);
let titlesArrayBar = titlesArray.slice(-3);

sessionStorage.setItem("titles", JSON.stringify(titlesArray));

let barText = "";
barText += titlesArrayBar.join(" &#8212 ");
let bar = document.getElementById("bar-text");
bar.innerHTML = barText;

//*** LOCAL STORAGE ***

if (pageTitle == "Home") {

	let counter = localStorage.getItem("counter");

	if (!counter) {

		counter = 0;

	}

	counter++;

	localStorage.setItem("counter", counter);
	console.log("Visited \"Home\" " + localStorage.getItem("counter") + " times");

}