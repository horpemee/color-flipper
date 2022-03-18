const clickBtn = document.querySelector(".btn-click");
const colorCode = document.querySelector(".bgProperty");
const literals = [
  "#33A1FF",
  "#33FFB3",
  "#33FF3B",
  "#FF337D",
  "#FF33EC",
  "#9A33FF",
  "#3385FF",
  "#33FF92",
  "#75FF33",
  "#FFC733",
];
const bgColor = document.querySelector(".section");

// Add Event Listeners
clickBtn.addEventListener("click", randomColors);

function randomColors() {
  let randomNumbers = Math.floor(Math.random() * literals.length);

  colorCode.textContent = literals[randomNumbers];

  bgColor.style.backgroundColor = literals[randomNumbers];
}
