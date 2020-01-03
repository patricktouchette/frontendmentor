// Add Design container and draggable line
const wrapper = document.getElementById("wrapper");
wrapper.insertAdjacentHTML("afterbegin", `<div id="design"></div>`);
wrapper.insertAdjacentHTML("afterbegin", ` <div id="line"></div>`);

const line = document.getElementById("line");
const design = document.getElementById("design");

// Set inital slider position
let startPos = getComputedStyle(line).left;
line.style.left = `${startPos}px`;
design.style.width = `${startPos}px`;

// State
let dragging = false;
let measuring = false;
let measure = 0;
let measureStart = 0;

// Helper to measure horizontal distances
// Hold down a
const startMeasure = e => {
  if (e.key !== "a") return;
  if (measuring) return;

  measuring = true;
  measureStart = +line.style.left.replace(/px/, "");
};

// Release a key, distance is console.logged
const stopMeasure = e => {
  measuring = false;
  console.log(
    "measure",
    `${Math.abs(measure)}px | ${Math.abs(measure) / 16}rem`
  );
};

const startDrag = e => {
  dragging = true;
  // Prevent content selection
  document.body.classList.add("prevent-selection");
};

const drag = e => {
  if (!dragging) return;
  line.style.left = e.x - 2 - wrapper.offsetLeft + "px";
  design.style.width = e.x - 2 - wrapper.offsetLeft + "px";

  if (measuring) {
    measure = measureStart + wrapper.offsetLeft - e.x;
  }
};

const stopDrag = () => {
  dragging = false;
  // Re-enable selection
  document.body.classList.remove("prevent-selection");
};

// Add Events
line.addEventListener("mousedown", startDrag);
window.addEventListener("mousemove", drag);
window.addEventListener("mouseup", stopDrag);
window.addEventListener("mouseleave", stopDrag);
window.addEventListener("keydown", startMeasure);
window.addEventListener("keyup", stopMeasure);
