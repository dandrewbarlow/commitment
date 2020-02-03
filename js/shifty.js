//Andrew Barlow


//shifty INIT

//get array of all sections
var sections = document.getElementsByClassName("body");
//set random color vals
var color = 0xFFFFFF;//Math.random()*0xFFFFFF<<0;

var toggle = true;
var ticker = 0;


function shifty() {
  ticker += 1;

  //step through and set colors
  for (var i = 0; i < sections.length; i++) {

    //detect color overflow
    if (color >= 16777215 | color <= 0) {
      toggle = !toggle;
      //edge case detection & correction
      if (color >= 16777215) {
        color = 16777210;
      }
      if (color <= 0) {
        color = 5;
      }

    }

    if (toggle) {
      color += Math.random()*0xFFFFFF<<0;
    } else if (!toggle){
      color -= Math.random()*0xFFFFFF<<0;
    }
    sections[i].style.color = '#' + color.toString(16);
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


//backgroundShift INIT
var color1 = 0x0000FF;
var color2 = 0x800080;
var delta1 = 1;
var delta2 = 1;
var background = document.getElementById("html");
var bgString = "linear-gradient(to bottom right, ";
function backgroundShift() {
  //detect overflow
  if (color1 > 0xFFFFFE | color1 < 1) {
    delta1 = -delta1;

  }
  if (color2 > 0xFFFFFE | color2 < 1) {
    delta2 = -delta2;

  }

    document.style.backgroundImage = bgString + color1.toString(16) + "," + color2toString(16) + ")";

}


//EXECUTE
window.setInterval(borderShift, 50);
window.setInterval(shifty, 100);

window.setInterval(bgShift, 100);
