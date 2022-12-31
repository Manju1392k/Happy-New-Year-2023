let BoxOne = document.getElementsByClassName("Boxone")[0];
let BoxTwo = document.getElementsByClassName("Boxtwo")[0];
let Newearnfo = document.getElementsByClassName("NewYearInfo")[0];
let NewYearMessage = document.getElementsByClassName("NewYearMessage")[0];

setInterval(() => {
  BoxOne.style.backgroundImage = "url('backgroundgif.gif')";
}, 3000);

setInterval(() => {
  BoxTwo.style.display = "flex";
}, 6000);

setInterval(() => {
  Newearnfo.style.display = "flex";
}, 8000);

setInterval(() => {
  NewYearMessage.style.display = "flex";
}, 10000);

// To reload the page,
setInterval(() => {
  location.reload();
}, 30000);
