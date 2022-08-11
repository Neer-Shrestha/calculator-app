const themeCircle = document.querySelector(".theme-circle");
const mainBody = document.querySelector("body");

themeCircle.addEventListener("click", (e) => {
  if (e.offsetX > 55) {
    return;
  } else if (e.offsetX > 35) {
    themeCircle.style.setProperty("--circle-position", 3);
    mainBody.removeAttribute("class");
    mainBody.classList.add("theme-three");
  } else if (e.offsetX > 20) {
    themeCircle.style.setProperty("--circle-position", 2);
    mainBody.removeAttribute("class");
    mainBody.classList.add("theme-two");
  } else {
    themeCircle.style.setProperty("--circle-position", 1);
    mainBody.removeAttribute("class");
    mainBody.classList.add("theme-one");
  }
});

// variable and constant
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const resetBtn = document.querySelector(".reset");
const calcDisplay = document.querySelector(".calc-display");
const calcOldValue = document.querySelector(".old-value");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const numb = btn.innerText;
    if (numb == ".") {
      let fixed = parseFloat(numb.replace("."));
      // return numb = fixed;
    }
    calcDisplay.innerHTML += numb;
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const oldValue = calcDisplay.innerHTML;
    calcDisplay.innerHTML = "";
    calcOldValue.innerHTML = oldValue;
    for (let i = 0; i < operationBtn.length; i++) {
      operationBtn[i].classList.remove("active");
    }
    btn.classList.add("active");
  });
});

equalBtn.addEventListener("click", (e) => {
  const operationActive = document.querySelector('.operation.active');
  console.log(operationActive)
  const hasActive = operationActive.innerHTML;
  const calcNewValue = parseFloat(calcDisplay.innerHTML);
  const calcOldValueInner = parseFloat(calcOldValue.innerHTML);
  if (hasActive == "/") {
    console.log(calcOldValueInner / calcNewValue);
    calcDisplay.innerHTML = calcOldValueInner / calcNewValue;
  } else if (hasActive == "*") {
    console.log(calcOldValueInner * calcNewValue);
    calcDisplay.innerHTML = calcOldValueInner * calcNewValue;
  } else if (hasActive == "+") {
    console.log(calcOldValueInner + calcNewValue);
    calcDisplay.innerHTML = calcOldValueInner + calcNewValue;
  } else {
    console.log(calcOldValueInner / calcNewValue);
    calcDisplay.innerHTML = calcOldValueInner - calcNewValue;
  }
});

resetBtn.addEventListener("click", () => {
  calcDisplay.innerHTML = "";
  calcOldValue.innerHTML = "";
});

deleteBtn.addEventListener('click', () => {
    calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0,-1);
})