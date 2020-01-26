var p_array;
p_array = document.getElementsByClassName("body");
var delta = 1;
var left[p_array.length];
for (int i = 0; i < p_array.length; i++) {
  left[i] = Math.random() * 100;
}

while (1) {

  if (left >= 100 | left <= 0) {
    delta = -delta;
  }
  for (var i = 0; i < p_array.length; i++) {
    p_array[i].style.left += delta;
  }

}
