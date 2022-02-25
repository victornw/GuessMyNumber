"use strict";

document.querySelector(".check").addEventListener("click", function () {
  let userNumber = Number(document.querySelector(".guess").value);
  console.log(typeof userNumber);

  if (!userNumber) {
    document.querySelector(".message").textContent = "Please type a number.";
  }
});
