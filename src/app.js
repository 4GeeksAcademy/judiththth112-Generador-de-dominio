import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronombre = ['la', 'nuestra', 'tu'];
  let adj = ['gran', 'pequeña', 'bonita'];
  let nombre = ['ciudad', 'aldea', 'villa'];

  for (let pronoun of pronombre) {
    for (let adje of adj) {
      for (let noun of nombre) {
        let dominio = pronoun + " " + adje + " " + noun;
        console.log("www." + dominio + ".es");
      }
    }
  }

};


