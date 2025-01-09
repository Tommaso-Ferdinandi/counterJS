// creazione html element
const section = document.createElement("section");
const h1 = document.createElement("h1");
const display = document.createElement("div");
const operator = document.createElement("div");
const decrease = document.createElement("button");
const increase = document.createElement("button");
const text = document.createElement("p");
const audio = new Audio("assets/audio/retro-select-sound.mp3")

// aggiunta di attrributi, proprietà e appending

// counter
section.setAttribute("class","counter");
document.body.append(section);

// header
h1.setAttribute("class","header");
h1.textContent = "Divertiti con il Counter!!";
section.appendChild(h1);

// displayCounter
display.setAttribute("class","displayCounter");
display.textContent = 0;
section.appendChild(display);

//operator
operator.setAttribute("class","operator");
section.appendChild(operator);

// decreaseCounter
decrease.setAttribute("class","btn decreaseCounter");
decrease.textContent = "-";
operator.appendChild(decrease);

// increaseCounter
increase.setAttribute("class","btn increaseCounter");
increase.textContent = "+";
operator.appendChild(increase);

// text
text.setAttribute("class","text");
text.textContent = "Quando vuoi sono pronto!!";
section.appendChild(text);

// js script in funzione
let value = 0;

// increase event 
increase.addEventListener("click", () => {
  value++;
  display.textContent = value;
  text.textContent = "";
  audio.play();
});

// decrease event
decrease.addEventListener("click", () => {
  if (value>0) {
    value--;
    if (value == 0) {
      text.textContent = "Quando vuoi sono pronto!!";
    };
    } else {
      text.textContent = "Mi dispiace niente numeri negativi!!";
    }
  display.textContent = value; 
  audio.play();
});
