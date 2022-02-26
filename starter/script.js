"use strict";

let random = Math.trunc(Math.random() * 20 + 1);
console.log(random);
// Check button
document.querySelector(".check").addEventListener("click", function () {
  let userNumber = Number(document.querySelector(".guess").value);
  console.log(userNumber);
  // No input
  if (!userNumber) {
    document.querySelector(".message").textContent = "Please type a number.";
    // Random number > user Number
  } else if (userNumber > random) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      document.querySelector(".message").style.color = "#fc4e4e";
      document.querySelector(".message").textContent = `⏬ The SECRET NUMBER is LOWER than ${userNumber} `;
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME! ❌";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#c25151";
    }
    // Random number < user Number
  } else if (userNumber < random) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      document.querySelector(".message").style.color = "#4774b3";
      document.querySelector(".message").textContent = `⏫ The SECRET NUMBER is GREATER than ${userNumber}`;
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME! ❌";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#c25151";
    }
    // Player wins the game
  } else if (userNumber === random) {
    document.querySelector(".message").style.color = "#fff";
    document.querySelector(".message").textContent = "You Win! 🥳";
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (Number(document.querySelector(".score").textContent) > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = (document.querySelector(".score").textContent - 20) * -1 + 1;
    }
  }
});

// RESET button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  random = Math.trunc(Math.random() * 20 + 1);
});
