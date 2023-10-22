const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countHeading = document.querySelector(".count");

let countValue = parseInt(countHeading.innerHTML);

resetBtn.addEventListener("click", function () {
  countHeading.innerHTML = 0;
  countValue = 0;
  countHeading.style.color = "black";
});

increaseBtn.addEventListener("click", function () {
  countHeading.innerHTML = ++countValue;
  if (countValue > 0) countHeading.style.color = "green";
  else if (countValue == 0) countHeading.style.color = "black";
});

decreaseBtn.addEventListener("click", function () {
  countHeading.innerHTML = --countValue;
  if (countValue < 0) countHeading.style.color = "red";
  else if (countValue == 0) countHeading.style.color = "black";
});
