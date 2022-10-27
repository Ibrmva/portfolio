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
fetch('https://reqres.in/api/users',{
     method : 'POST',
     headers: {
         'Content-Type':'application/json'
     },
     body: JSON.stringify({
         name: 'User 1'
     })
 })
 .then(res => {
     return res.json( )
 })

 .then(data => console.log(data))
 .catch(error => console.log('ERROR'))
