var form = document.getElementById('form');
form.addEventListener('submit', e => {
  console.log(e, "this is event")
  e.preventDefault();
  console.log('SUBMIT');
});

$("button").click(function(){
  console.log("click")
})
