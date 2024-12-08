let num = document.getElementById("num");
let selected = document.getElementById("selected");
let targeted = document.getElementById("targeted");
let result = document.getElementById("result");

const Currency = {
  USD: { USD: 1, EUR: 0.91, GBP: 0.76, JPY: 135.01, PKR: 287.5, INR: 83.2},
  EUR: { USD: 1.1, EUR: 1, GBP: 0.84, JPY: 148.65, PKR: 315.2, INR: 91.5},
  GBP: { USD: 1.32, EUR: 1.19, GBP: 1, JPY: 176.45, PKR: 372.8, INR: 108.9},
  JPY: { USD: 0.0074, EUR: 0.0067, GBP: 0.0057, JPY: 1, PKR: 2.11, INR: 0.62},
  PKR: { USD: 0.0035, EUR: 0.0032, GBP: 0.0027, JPY: 0.47, PKR: 1, INR: 0.30 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0092, JPY: 1.61, PKR: 3.34, INR: 1 }
};

function Convert() {
  let inputVal = num.value;
  let selectedVal = selected.value;
  let targetedVal = targeted.value;

  let output = Currency[selectedVal][targetedVal];
  let resultVal = inputVal * output
  result.innerHTML = `${inputVal} ${selectedVal} = ${resultVal} ${targetedVal}`;
}
