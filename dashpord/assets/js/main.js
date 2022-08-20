let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function() {
	fileInput.click();
}
fileInput.onchange = function() {
	let filename = fileInput.files[0].name;
	let selectName = document.getElementsByClassName("file-select-name")[0];
	selectName.innerText = filename;
}


/*
Conic gradients are not supported in all browsers (https://caniuse.com/#feat=css-conic-gradients), so this pen includes the CSS conic-gradient() polyfill by Lea Verou (https://leaverou.github.io/conic-gradient/)
*/

// Find al rating items
const ratings = document.querySelectorAll(".rating");

// Iterate over all rating items
ratings.forEach((rating) => {
  // Get content and get score as an int
  const ratingContent = rating.innerHTML;
  const ratingScore = parseInt(ratingContent, 10);

  // Define if the score is good, meh or bad according to its value
  const scoreClass =
    ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";

  // Add score class to the rating
//   rating.classList.add(scoreClass);

  // After adding the class, get its color
  const ratingColor = window.getComputedStyle(rating).backgroundColor;

  // Define the background gradient according to the score and color
  const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

  // Set the gradient as the rating background
  rating.setAttribute("style", gradient);

  // Wrap the content in a tag to show it above the pseudo element that masks the bar
  rating.innerHTML = `<span>${ratingScore} ${
    ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
  }</span>`;
});



function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;

  }

}
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;

}




