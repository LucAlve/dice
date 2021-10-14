var randomNumber = Math.floor(Math.random() * 6) + 1
var secondRandomNumber = Math.floor(Math.random() * 6) + 1

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+secondRandomNumber+".png");

if (randomNumber > secondRandomNumber) {
  document.getElementsByTagName("h1")[0].innerText = "Player 1 wins";
} else if (secondRandomNumber > randomNumber) {
  document.getElementsByTagName("h1")[0].innerText = "Player 2 wins";
} else {
  document.getElementsByTagName("h1")[0].innerText = "Draw";
}
