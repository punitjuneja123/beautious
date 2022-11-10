//slider buttons
const buttonRight = document.querySelector("#slideRight");
const buttonLeft = document.querySelector("#slideLeft");
let button1count = 0;
function hideuttons(button1count) {
  if (button1count == 1) {
    buttonLeft.style.opacity = 0;
    buttonRight.style.opacity = 0.7;
  } else {
    buttonRight.style.opacity = 0;
    buttonLeft.style.opacity = 0.7;
  }
}
hideuttons(button1count);
buttonRight.addEventListener("click", function () {
  document.getElementById("imgslider").scrollLeft -= 900;
  button1count = 0;
  hideuttons(button1count);
});
buttonLeft.addEventListener("click", function () {
  document.getElementById("imgslider").scrollLeft += 900;
  button1count = 1;
  hideuttons(button1count);
});
