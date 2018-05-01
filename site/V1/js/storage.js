//############ SESSION STORAGE ############

// sessionStorage.clear();

let titlesArray;
let retrievedData = sessionStorage.getItem("titles");

if (!retrievedData) {

	retrievedData = "[]";

}

titlesArray = JSON.parse(retrievedData);

let pageTitle = document.title;  
titlesArray.push(pageTitle);
let titlesArrayBar = titlesArray.slice(-3);

sessionStorage.setItem("titles", JSON.stringify(titlesArray));

let barText = "";
barText += titlesArrayBar.join(" — ");
let bar = document.getElementById("bar-text");
bar.innerHTML = barText;

console.log("titlesArrayBar is " + titlesArrayBar);
console.log("titlesArray is " + titlesArray);



//############ LOCAL STORAGE ############

// localStorage.clear();

if (pageTitle == "Home") {

	let counter = localStorage.getItem('counter');

	if (!counter) {

		counter = 0;

	}

	counter++;

	localStorage.setItem("counter", counter);
	console.log(localStorage.getItem('counter'));

}



//############ SAVE HISTORY ############

// var z = new JSZip();

// if (titlesArray.includes("Delete, Not Fade Away and Radiate")) {

// 	console.log("got here");

// }

// z.folder("Session_01").file("Hello.txt", "Hello World\n");

// var promise = null;

// if (JSZip.support.uint8array) {

// 	promise = z.generateAsync({type : "uint8array"});

// } else {

// 	promise = z.generateAsync({type : "string"});

// }

// z.generateAsync({type:"blob"}).then(function(content) {

//     saveAs(content, "archive.zip");

// });

