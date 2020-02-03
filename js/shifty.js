//Andrew Barlow


//shifty INIT


function shifty() {
  var sections = document.getElementsByClassName("body");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.gridColumn = Math.random() % 5;
  }


}


//borderShift INIT
var shrink = true;
var radius = 50;

function borderShift() {
  //main
  var main = document.getElementById("main");

  //check border size, if too big or small switch direction
  if (radius > 50 | radius < 10) {
    shrink = !shrink;
  }

  //change the border size based on them sizes
  if (shrink) {
    radius -= 1;
    main.style.borderRadius = radius + "%";
  } else {
    radius += 1;
    main.style.borderRadius = radius + "%";
  }


}

window.setInterval(borderShift, 10);
window.setInterval(shifty, 10);
