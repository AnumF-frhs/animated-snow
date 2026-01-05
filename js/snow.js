alert ('I know Christmas is over...but..')

const contaiNer = document.getElementById("snow-container"); 
//snowContainer

const snowFlake = ['&#10052', '&#10053', '&#10054']
//snowContent

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return ` 
 top: -${top}%; 
 left: ${left}%; 
 font-size: ${size}px; 
 animation-duration: ${dur}s; 
 `;
}

const makeSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowFlake[random(2)]
    contaiNer.append(snow);
  }
}

window.addEventListener("load", () => {
  makeSnow(30)
});