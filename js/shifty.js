var p_array;
p_array = document.getElementsByClassName("body");
var delta = 1;
var left;
for (var i = 0; i < p_array.length; i++) {
  left[i] = Math.random() * 100;
  p_array[i].style.left = left[i] + "%";
}

function shifty() {


  for (var i = 0; i < p_array.length; i++) {
    p_array[i].style.left = delta + "%";

    if (left >= 100 | left <= 0) {
      delta = -delta;
    }
  }

}

window.setInterval(shifty, 10);
