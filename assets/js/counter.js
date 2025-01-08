// creazione html element

const section = document.createElement("section");
const h1 = document.createElement("h1");
const display = document.createElement("div");
const decrease = document.createElement("button");
const increase = document.createElement("button");
const audio = new Audio("assets/audio/retro-select-sound.mp3")

// aggiunta di attrributi, proprietà e appending

// counter
section.className("counter");
document.body.append(section);

// header
h1.className("header");
h1.textContent("Divertiti con il Counter!!");
section.appendChild(h1);

// displayCounter
display.className("displayCounter");
display.textContent(0);
section.appendChild(display);

// decreaseCounter
decrease.className("button");
decrease.className("decreaseCounter");
decrease.textContent("-");
section.appendChild(decrease);

// increaseCounter
increase.className("button");
increase.className("increaseCounter");
increase.textContent("+");
section.appendChild(increase);
