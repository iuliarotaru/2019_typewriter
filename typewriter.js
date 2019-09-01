"use strict";

//Declaring variables
let text = document.querySelector("#typewriter").textContent;
let myArray = text.split("");
let timer;
let button = document.querySelector("button");
let sound1 = document.getElementById("typekey1");
let sound2 = document.getElementById("typekey3");

//Event Listeners
button.addEventListener("click", () => {
  addLetters();
  document.querySelector("button").classList.add("hide"); //Button dissapears after you click on it
});

//Declaring functions
function addLetters() {
  if (myArray.length > 0) {
    document.getElementById("display-text").innerHTML += myArray.shift(); //shift will change the length of the array
    setTimeout(function() {
      sound1.play();
    }, 30);
    setTimeout(function() {
      sound2.play();
    }, 60);
  } else {
    clearTimeout(timer);
    return false;
  }
  timer = setTimeout("addLetters()", 50);
}
