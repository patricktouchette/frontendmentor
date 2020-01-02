let monthly = true;

const togglePrices = () => {
  const yearlyPrice = document.querySelectorAll(".price-annually");
  const monthlyPrice = document.querySelectorAll(".price-monthly");
  const toggle = document.querySelector(".toggle");

  if (monthly) {
    yearlyPrice.forEach(p => p.classList.remove("hidden"));
    monthlyPrice.forEach(p => p.classList.add("hidden"));
    toggle.classList.remove("toggle-monthly");
    monthly = false;
  } else {
    yearlyPrice.forEach(p => p.classList.add("hidden"));
    monthlyPrice.forEach(p => p.classList.remove("hidden"));
    toggle.classList.add("toggle-monthly");
    monthly = true;
  }
};

const toggleBox = document.getElementById("toggleBox");
toggleBox.addEventListener("click", togglePrices);
