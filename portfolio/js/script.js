var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
var reset =
document.getElementById('reset')
reset.onclick = function() {
  count = 0;
  button.innerHTML = "Click me: " + count;
};
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click")
    navlist.classList.toggle("open");
});

