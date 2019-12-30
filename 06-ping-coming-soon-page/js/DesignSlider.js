const line = document.getElementById("line");
const design = document.getElementById("design");
const wrapper = document.getElementById("wrapper");

let startPos = getComputedStyle(line).left;
line.style.left = `${startPos}px`;
design.style.width = `${startPos}px`;

let dragging = false;
let measuring = false;

let measure = 0;
let measureStart = 0;
let mesureEnd = 0;

const startMeasure = e => {
  if (e.key !== "a") return;
  if (measuring) return;

  measuring = true;
  measureStart = +line.style.left.replace(/px/, "");
};

const stopMeasure = e => {
  measuring = false;
  console.log("measure", Math.abs(measure));
};

const startDrag = e => {
  dragging = true;
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
};

line.addEventListener("mousedown", startDrag);
document.body.addEventListener("mousemove", drag);
document.body.addEventListener("mouseup", stopDrag);
document.body.addEventListener("mouseleave", stopDrag);
document.body.addEventListener("keydown", startMeasure);
document.body.addEventListener("keyup", stopMeasure);
