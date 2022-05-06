let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

const teste1 = document.getElementById("button1");
const teste2 = document.getElementById("button2");

const paragrafo = document.getElementById("paragrafo1");
const paragrafo2 = document.getElementById("paragrafo2");


function increment() {
  currentNumber++;

  if (currentNumber >= 10) {
    teste2.style.display = "none";
  }

  currentNumberWrapper.innerHTML = currentNumber;
  paragrafo2.innerHTML = "somou";
}

function decrement() {
  currentNumber--;

  if (currentNumber < 10) {
    teste2.style.display = "inline";
  }

  currentNumberWrapper.innerHTML = currentNumber;
  paragrafo.innerHTML = "subtraiu";
}

