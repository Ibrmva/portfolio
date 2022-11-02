var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click")
    navlist.classList.toggle("open");
});
const container = document.querySelector('.container')
container.addEventListener('animationend', () => {
  container.classList.remove('active');
});
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};

