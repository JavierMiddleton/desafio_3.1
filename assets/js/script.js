/* Variables */ 

const productPrice = 25000;
let quantityUser = document.getElementById("quantity-input");
let colorUser = document.getElementById("color-input");
let priceFinal = document.getElementById("total-price");
let quantityFinal = document.getElementById("total-quantity");
let colorFinal = document.getElementById("final-color");

/* Event Listener - Button click */

document.getElementById('calculate-button').addEventListener('click', calculate);

/* Calculate Fuction */

function calculate () {
    let priceTotal = Number(quantityUser.value) * productPrice;
    priceFinal.innerHTML = priceTotal;
    quantityFinal.innerHTML = Number(quantityUser.value);
    colorFinal.style.backgroundColor = colorUser.value;
}