var form = document.getElementById('form');
var submitBtn = document.getElementById("submit-btn");
var inputs = document.querySelectorAll("input");

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('SUBMIT');
});

document.querySelector("body").setAttribute("name", "good-times");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].style.backgroundColor = "lightblue";
  inputs[i].style.fontSize = "3rem";
}

form.style.padding = "20px";
form.style.margin = "20px";
form.style.border = "4px solid darkgray";
form.style.backgroundColor = "purple";
form.style.color = "yellow";
form.style.fontFamily = "Arial, Helvetica, sans-serif";