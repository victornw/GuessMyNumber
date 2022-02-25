"use strict";

const random = Math.trunc(Math.random() * 20 + 1);
console.log(random);
document.querySelector(".check").addEventListener("click", function () {
  let userNumber = Number(document.querySelector(".guess").value);
  console.log(userNumber);

  if (!userNumber) {
    document.querySelector(".message").textContent = "Please type a number.";
  } else if (userNumber > random) {
    document.querySelector(
      ".message"
    ).textContent = `⏬ The SECRET NUMBER is LOWER than ${userNumber} `;
  } else if (userNumber < random) {
    document.querySelector(
      ".message"
    ).textContent = `⏫ The SECRET NUMBER is GREATER than ${userNumber}`;
  } else if (userNumber === random) {
    document.querySelector(".message").textContent = "You Win! 🥳";
    document.querySelector(".number").textContent = random;
  }
});
