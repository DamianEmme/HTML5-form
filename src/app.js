/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
function formValidation(event) {
  event.preventDefault();

  let inputEmail4 = document.getElementById("inputEmail4");
  let myAlert = document.getElementById("alert");

  if (validator.isEmpty(name.value)) {
    inputEmail4.style.backgroundColor = "yellow";
  } else {
    inputEmail4.style.backgroundColor = "white";
  }
}
