// Carousel
let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("choose-box");
let product_page = Math.ceil(product.length / 5);
let l = 0;
let movePer = 30;
let maxMove = 200;

let right_mover = () => {
  l = l + movePer;
  if(product == 1) {
    l = 0;
  }
  for(const i of product) {
    if(l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if(l <= 0) {
    l = 0;
  }
  for(const i of product) {
    if(product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
span[1].onclick = () => {
  right_mover();
};
span[0].onclick = () => {
  left_mover();
};
// Sticky header
window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// Footer date
document.querySelector(".y").innerHTML = "@" + " " + "2015 - " + new Date().getFullYear() + " All rights reserved.";