const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");
const computed = getComputedStyle(slider);

right.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }
  
  if (currentRight < 1900) {
    slider.style.right = currentRight + 1900 + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    slider.style.right = currentRight - 1900 + "px";
  }
});