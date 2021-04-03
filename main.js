let value = document.querySelector("#simbol");
let input = document.querySelector("#convert");
let int = document.querySelector("#energyInt");
let fort = document.querySelector("#energyFort");
let label = document.querySelector("label span");
let simbol = document.querySelector(".energySimbol");

setInterval(function () {
  //Watts for Amperes

  if (int.value == "W" && fort.value == "A") {
    if (input.value <= 0) {
      value.innerText = (0).toFixed(2);
      simbol.innerText = "A";
    } else {
      value.innerText = (parseFloat(input.value) / valueVoltage.value)
        .toFixed(2)
        .replace(".", ",");
      simbol.innerText = "A";
    }
  }

  //Ampere fot Watts
  else if (int.value == "A" && fort.value == "W") {
    if (input.value <= 0) {
      value.innerText = (0).toFixed(2);
      simbol.innerText = "W";
    } else {
      value.innerText = (parseFloat(input.value) * valueVoltage.value)
        .toFixed(2)
        .replace(".", ",");
      simbol.innerText = "W";
    }
  }

  //Energy props
  else if (int.value == fort.value) {
    if (input.value <= 0) {
      value.innerText = (0).toFixed(2).replace(".", ",");
      if (fort.value == "W") {
        simbol.innerText = "W";
      } else if (fort.value == "A") {
        simbol.innerText = "A";
      }
    } else {
      value.innerText = parseFloat(input.value).toFixed(2).replace(".", ",");
      if (fort.value == "W") {
        simbol.innerText = "W";
      } else if (fort.value == "A") {
        simbol.innerText = "A";
      }
    }
  }
}, 1);
