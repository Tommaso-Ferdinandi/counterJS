// creazione html element

const section = document.createElement("section");
const h1 = document.createElement("h1");
const display = document.createElement("div");
const decrease = document.createElement("button");
const increase = document.createElement("button");
const text = document.createElement("p");
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

// text
text.className("text");
text.textContent("Quando vuoi sono pronto!!")
section.appendChild(text)


// js script in funzione
let value = 0;

// increase event 
increase.addEventListener("click", () => {
  value++;
  display.textContent = value;
  text.textcontent = "";
  audio.play();
});

// decrease event
decrease.addEventListener("click", () => {
  if (value > 0) {
    value--;
  }
  display.textContent = value; 
  text.textContent = value === 0 ? "Quando vuoi sono pronto!!" : ""; /*check se il counter è tornato a zero*/
  audio.play();
});
