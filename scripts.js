var form = document.getElementById('form');
var submitBtn = document.getElementById("submit-btn");
var inputs = document.querySelectorAll("input");

form.addEventListener('submit', e => {
  console.log(e, "this is event")
  e.preventDefault();

  console.log(e.target, "TARGET");

  console.log('SUBMIT');

  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
  }
});

document.querySelector("body").setAttribute("name", "good-times");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].style.backgroundColor = "lightblue";
  inputs[i].style.fontSize = "3rem";
  inputs[i].style.textAlign = "right";
}

form.style.padding = "20px";
form.style.margin = "20px";
form.style.float = "right";
form.style.border = "4px solid darkgray";
form.style.backgroundColor = "purple";
form.style.color = "yellow";
form.style.fontFamily = "Atlas Typewriter, Arial, Helvetica, sans-serif";



const array = [1,3,4,5,6,89,44,32];

for (var num of array) {
  console.log(num);
}

console.log("Good Times");

$("button").click(function(){
  console.log("click")
});
