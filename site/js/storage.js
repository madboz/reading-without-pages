// sessionStorage.clear();

let pageTitle = document.title;
let titlesArray = [];
let retrievedData = sessionStorage.getItem("titles");;

if (retrievedData) {
	
	titlesArray.push(JSON.parse(retrievedData));

}
  
titlesArray.push(pageTitle);

sessionStorage.setItem("titles", JSON.stringify(titlesArray));
console.log(titlesArray);

let barText = "";
barText += titlesArray.join(" — ");
console.log(titlesArray.join(" — "));

let bar = document.getElementById("bar-text");
bar.innerHTML = barText;