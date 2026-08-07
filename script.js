const rates = {
  "Additional ₹2 Lakh Cover": {"0-17":170,"18-35":135,"36-45":150,"46-55":225,"56-60":440,"61-65":645,"66-70":765,"71-75":900,"76-80":1040,"81-85":1200},
  "Additional ₹3 Lakh Cover": {"0-17":225,"18-35":205,"36-45":225,"46-55":345,"56-60":645,"61-65":925,"66-70":1090,"71-75":1285,"76-80":1480,"81-85":1715},
  "Additional ₹4 Lakh Cover": {"0-17":285,"18-35":275,"36-45":300,"46-55":460,"56-60":850,"61-65":1200,"66-70":1415,"71-75":1670,"76-80":1925,"81-85":2225}
};

const ages = Object.keys(rates["Additional ₹2 Lakh Cover"]);
const rowsEl = document.getElementById("rows");
const planEl = document.getElementById("plan");
const totalEl = document.getElementById("total");

ages.forEach(a => {
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `<span>${a} yrs</span><input id="age-${a}" type="number" min="0" value="0" inputmode="numeric">`;
  rowsEl.appendChild(row);
  document.getElementById(`age-${a}`).oninput = calc;
});

planEl.onchange = calc;
document.getElementById("resetBtn").onclick = resetCalc;

function calc() {
  const plan = planEl.value;
  let total = 0;
  ages.forEach(a => {
    const count = +document.getElementById(`age-${a}`).value || 0;
    total += count * rates[plan][a];
  });
  totalEl.textContent = "₹" + total.toLocaleString("en-IN");
}

function resetCalc() {
  ages.forEach(a => { document.getElementById(`age-${a}`).value = 0; });
  calc();
}

calc();
