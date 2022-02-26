"use strict";

let random = Math.trunc(Math.random() * 20 + 1);
console.log(random);
document.querySelector(".check").addEventListener("click", function () {
  let userNumber = Number(document.querySelector(".guess").value);
  console.log(userNumber);

  if (!userNumber) {
    document.querySelector(".message").textContent = "Please type a number.";
  } else if (userNumber > random) {
    if (Number(document.querySelector(".score").textContent) > 0) {
      document.querySelector(".message").textContent = `⏬ The SECRET NUMBER is LOWER than ${userNumber} `;
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME! ❌";
    }
  } else if (userNumber < random) {
    if (Number(document.querySelector(".score").textContent) > 0) {
      document.querySelector(".message").textContent = `⏫ The SECRET NUMBER is GREATER than ${userNumber}`;
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME! ❌";
    }
  } else if (userNumber === random) {
    document.querySelector(".message").textContent = "You Win! 🥳";
    document.querySelector(".number").textContent = random;
    if (Number(document.querySelector(".score").textContent) > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = (document.querySelector(".score").textContent - 20) * -1 + 1;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  random = Math.trunc(Math.random() * 20 + 1);
});
