const visualBlock = document.querySelector(".visual-block");
const NUM_BARS = 20;
const DELAY = 500;
let bars = [];

function createBars() {
  visualBlock.innerHTML = "";
  bars = [];
  for (let i = 0; i < NUM_BARS; i++) {
    const value = Math.floor(Math.random() * 200) + 20;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    visualBlock.appendChild(bar);
    bars.push({ value, element: bar });
  }
}

async function startSort() {
  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].element.style.background = "red";
      bars[j + 1].element.style.background = "red";

      if (bars[j].value > bars[j + 1].value) {
        await new Promise((resolve) => setTimeout(resolve, DELAY));
        // Swap
        [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
        visualBlock.insertBefore(bars[j].element, bars[j + 1].element);
      }

      bars[j].element.style.background = "steelblue";
      bars[j + 1].element.style.background = "steelblue";
    }
  }
}

createBars();
