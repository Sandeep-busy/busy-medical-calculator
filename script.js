const rates = {
  "Additional ₹2 Lakh Cover": {"0-17":170,"18-35":135,"36-45":150,"46-55":225,"56-60":440,"61-65":645,"66-70":765,"71-75":900,"76-80":1040,"81-85":1200},
  "Additional ₹3 Lakh Cover": {"0-17":225,"18-35":205,"36-45":225,"46-55":345,"56-60":645,"61-65":925,"66-70":1090,"71-75":1285,"76-80":1480,"81-85":1715},
  "Additional ₹4 Lakh Cover": {"0-17":285,"18-35":275,"36-45":300,"46-55":460,"56-60":850,"61-65":1200,"66-70":1415,"71-75":1670,"76-80":1925,"81-85":2225}
};

const ages = Object.keys(rates["Additional ₹2 Lakh Cover"]);
const rowsEl = document.getElementById("rows");
const totalEl = document.getElementById("total");
const tabs = Array.from(document.querySelectorAll(".tab"));

let selectedPlan = tabs.find(t => t.classList.contains("active")).dataset.plan;

ages.forEach(a => {
  const key = document.createElement("div");
  key.className = "key";
  key.innerHTML = `<span class="key-label">${a} yrs</span><input id="age-${a}" type="number" min="0" value="0" inputmode="numeric">`;
  rowsEl.appendChild(key);
  document.getElementById(`age-${a}`).oninput = calc;
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    selectedPlan = tab.dataset.plan;
    calc();
  });
});

document.getElementById("resetBtn").onclick = resetCalc;

function calc() {
  let total = 0;
  ages.forEach(a => {
    const count = +document.getElementById(`age-${a}`).value || 0;
    total += count * rates[selectedPlan][a];
  });
  totalEl.textContent = "₹" + total.toLocaleString("en-IN");
}

function resetCalc() {
  ages.forEach(a => { document.getElementById(`age-${a}`).value = 0; });
  calc();
}

calc();
