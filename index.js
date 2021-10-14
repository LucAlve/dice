var randomNumber = Math.floor(Math.random() * 6) + 1
var secondRandomNumber = Math.floor(Math.random() * 6) + 1

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber+".png");

// professors way
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+secondRandomNumber+".png");

if (randomNumber > secondRandomNumber) {
// professors way
  document.querySelector("h1")[0].innerText = "Player 1 wins";
} else if (secondRandomNumber > randomNumber) {
  document.getElementsByTagName("h1")[0].innerText = "Player 2 wins";
} else {
  document.getElementsByTagName("h1")[0].innerText = "Draw";
}
