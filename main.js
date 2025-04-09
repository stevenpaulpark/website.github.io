const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const offset = 50;

menBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu-open');
})
window.addEventListener('scroll', () =>{
    if (pageYOffset > offset){
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// image slider

let slider = tns({
  container : ".my-slider",
  "slideBy" : "1",
  "speed" : 400,
  "nav" : false,
  autoplay : true,
  controls : false,
  autoplayButtonOutput : false,
  responsive : {
    1600: {
      items : 3,
      gutter : 20
    },
    1024: {
      items : 2,
      gutter : 20
    }
  }
})