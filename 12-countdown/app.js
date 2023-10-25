const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const startDate = document.querySelector(".info h3");
const items = document.querySelectorAll(".countdown-format h4");
const countdown = document.querySelector(".countdown");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dateNumber = date.getDate();

const futureDate = new Date(year, month, dateNumber + 10, 9, 0);
startDate.textContent = `Festival begins on ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const t = futureTime - new Date().getTime();
  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  function format(item) {
    if (item < 10) return `0${item}`;
    return item;
  }
  const values = [days, hours, minutes, seconds];
  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });
}
const clear = setInterval(getRemainingTime, 1000);
getRemainingTime();
