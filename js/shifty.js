
var p_array;
p_array = document.getElementsByClassName("body");

var delta = 1;
var left;

//init array of random values, set it to left vals of
//body paragraphs
for (var i = 0; i < p_array.length; i++) {
  left[i] = Math.random() * 100;
  p_array[i].style.left = left[i] + "%";
}

function shifty() {


  for (var i = 0; i < p_array.length; i++) {
    p_array[i].style.left = delta + "%";

    if (p_array[i].style.left >= 100 | p_array[i].style.left <= 0) {
      delta = -delta;
    }
  }

}

function borderShift() {

}

window.setInterval(shifty, 10);
