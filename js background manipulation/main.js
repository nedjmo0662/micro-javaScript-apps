var color1 = document.querySelector(".left");
var color2 = document.querySelector(".right");
var body = document.getElementById("gradient");

function gradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}

color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);