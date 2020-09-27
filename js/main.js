// !Page elements
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// !Make calculations

// Find out the current time
const currentYear = new Date().getFullYear();
const nextYear = new Date(`October 19 ${currentYear} 00:00:00`);

function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // Conversion to seconds / minutes / hours / days

  // Translation in days
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

  // Translation in hours
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

  // Translation in minutes
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

  // Translation in seconds
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

updateCounter();

// Run calculation 1 time per second
setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 300);
