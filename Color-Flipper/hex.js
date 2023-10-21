const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = getHexColor();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * hex.length);
    color += hex[idx];
  }
  console.log(color);
  return color;
}
