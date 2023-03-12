var bill = document.getElementById("amount");
var qty = document.getElementById("quantity");
var first_tip = document.querySelector(".tip10");
var second_tip = document.querySelector(".tip15");
var third_tip = document.querySelector(".tip20");
var four_tip = document.querySelector(".tip25");
var five_tip = document.querySelector(".tip30");
var rslt_one = document.getElementById("one");
var rslt_two = document.getElementById("two");
var rest_btn = document.querySelector(".reset");
var cst = document.querySelector(".custom");
var y;

// Tip Event

first_tip.addEventListener("click", function one() {
  y = 0.1;
  output();
});

second_tip.addEventListener("click", function two() {
  y = 0.15;
  output();
});

third_tip.addEventListener("click", function three() {
  y = 0.2;
  output();
});

four_tip.addEventListener("click", function four() {
  y = 0.25;
  output();
});

five_tip.addEventListener("click", function five() {
  y = 0.3;
  output();
});

// Custom Event

cst.addEventListener("keyup", function cal(event) {
  if (event.key === "Enter") {
    y = cst.value / 100;
    if (isNaN(y)) {
      alert("Please Enter Number");
    } else {
      output();
    }
  }
});

// Calculation Function

function output() {
  fault();
  var z = qty.value;
  var x = bill.value;
  var tip_cal = ((x * y) / z).toFixed(2);
  if (isNaN(tip_cal) || tip_cal === "Infinity") {
    infinity();
  } else {
    rslt_one.innerHTML = "$" + tip_cal;
  }
  var bil_cal = ((x * y) / z + x / z).toFixed(2);
  if (isNaN(bil_cal) || bil_cal === "Infinity") {
    infinity();
  } else {
    rslt_two.innerHTML = "$" + bil_cal;
  }
  all_new();
}

rest_btn.addEventListener("click", infinity);

// Infinity Error Function

function infinity() {
  rslt_one.innerText = "$0.00";
  rslt_two.innerHTML = "$0.00";
  rest_btn.className = "reset";
}

// Fault Function

function fault() {
  if (bill.value === "" || isNaN(bill.value) || bill.value === "0") {
    alert("Please Enter a Bill Amount");
  }
  if (qty.value === "" || isNaN(qty.value) || qty.value === "0") {
    alert("Please Enter Number of People");
  }
}

// Reset Function

function all_new() {
  rest_btn.className = "reset2";
}
