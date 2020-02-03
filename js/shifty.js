//Andrew Barlow


//shifty INIT

//get array of all sections
var sections = document.getElementsByClassName("body");
//set random color vals
var color = (Math.random() * 0xFFFFFF) % 0xFFFFFF;

var toggle = true;



function shifty() {

  //step through and set colors
  for (var i = 0; i < sections.length; i++) {

    if (color >= 0xFFFFFF | color <= 0) {
      toggle = !toggle;
    }

    if (toggle) {
      color += 1;
    } else {
      color -= 1;
    }
    sections[i].style.color = '#' + color;
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
