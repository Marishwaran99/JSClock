const hour_hand = document.querySelector(".hour-hand");
const min_hand = document.querySelector(".min-hand");
const sec_hand = document.querySelector(".sec-hand");

setInterval(setTime, 1000);

function setTime() {
  var date = new Date();
  var sec = date.getSeconds() / 60;
  var min = (date.getMinutes() + sec) / 60;
  var hr = (date.getHours() + min) / 12;

  hour_hand.style.setProperty("--rotate", hr * 360);
  min_hand.style.setProperty("--rotate", min * 360);
  sec_hand.style.setProperty("--rotate", sec * 360);
}

setTime();
