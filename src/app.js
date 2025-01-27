/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const inputcard = document.querySelector("#card-form");
  const inputcvc = document.querySelector("#cvc-form");
  const inputamount = document.querySelector("#amount-form");
  const inputname = document.querySelector("#name-form");
  const inputlastname = document.querySelector("#lastname-form");
  const inputcity = document.querySelector("#city-form");
  const inputstate = document.querySelector("#state-form");
  const inputpostal = document.querySelector("#postal-form");
  const inputmessage = document.querySelector("#message-form");
  const inputform = document.querySelector("#pay-form");
  const inputwarn = inputform.querySelector("#warning-form");
  const button = document.querySelector("#submit");

  inputform.addEventListener("submit", evento => {
    evento.preventDefault();
    if (inputcard.value === "") {
      showalert("Some fild are missing");
      inputcard.classList.add("alert-danger");
    }
    if (inputcvc.value === "") {
      showalert("Some fild are missing");
      inputcvc.classList.add("alert-danger");
    }
    if (inputamount.value === "") {
      showalert("Some fild are missing");
      inputamount.classList.add("alert-danger");
    }
    if (inputname.value === "") {
      showalert("Some fild are missing");
      inputname.classList.add("alert-danger");
    }
    if (inputlastname.value === "") {
      showalert("Some fild are missing");
      inputlastname.classList.add("alert-danger");
    }
    if (inputcity.value === "") {
      showalert("Some fild are missing");
      inputcity.classList.add("alert-danger");
    }
    if (inputstate.value === "") {
      showalert("Some fild are missing");
      inputstate.classList.add("alert-danger");
    }
    if (inputpostal.value === "") {
      showalert("Some fild are missing");
      inputpostal.classList.add("alert-danger");
    }
    if (inputmessage.value === "") {
      showalert("Some fild are missing");
      inputmessage.classList.add("alert-danger");
      return;
    }
  });

  /*inputcard.addEventListener("blur", function(evento) {
    console.log(evento.target.value);
  });*/

  //Puedo crear en una linea aparte la funcion anterior y ahorrar linea:
  inputcard.addEventListener("blur", check);
  inputcvc.addEventListener("blur", check);
  inputamount.addEventListener("blur", check);
  inputname.addEventListener("blur", check);
  inputlastname.addEventListener("blur", check);
  inputcity.addEventListener("blur", check);
  inputstate.addEventListener("blur", check);
  inputpostal.addEventListener("blur", check);
  inputmessage.addEventListener("blur", check);
  //------------
  function check(evento) {
    if (evento.target.value.trim() === "") {
      showalert("Some fild are missing");
      return;
    }
    cleanalert(inputwarn);
  }
  function showalert(mesalert) {
    const alertred = document.querySelector(".alert-danger");
    if (alertred) {
      alertred.remove();
    }

    const errorcard = document.createElement("DIV");
    errorcard.innerHTML = mesalert;
    errorcard.classList.add("alert-danger", "p-3", "alert");
    inputwarn.insertBefore(errorcard, inputwarn.firstChild);
  }
  function cleanalert(inputwarn) {
    const red = inputwarn.querySelector(".alert-danger");
    if (red) {
      red.remove();
    }
  }
};
