
export let
    databaseKey = '',
    databaseId = 'edfb0da8';

import {searchFood, searchNutrients, product, weight, energy, fat, carbs,} from "./database_request";



document.getElementById('calorie-search-form').addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchFood();
    fillTop();
});




document.getElementById('add-button').addEventListener("click", async () => {
    await searchNutrients();
    fillBottom();
})

function fillTop() {
    document.getElementById('product').textContent = product;
    document.getElementById('quantity').textContent = weight;
    document.getElementById('label').textContent = 'Gram';
}

function fillBottom() {
    const productInput = document.getElementById('product-input');
    const caloriesInput = document.getElementById('calories-input');
    const fatInput = document.getElementById('fat-input');
    const carbsInput = document.getElementById('carbs-input')
    const productBox = document.createElement('div');
    productBox.className = 'sum';
    const productName = document.createElement('p');
    productName.textContent = product
    const calorieBox = document.createElement('div');
    calorieBox.className = 'sum';
    const energyKcal = document.createElement('p');
    energyKcal.textContent = `${Math.ceil(energy[1])} ${energy[2]}`;
    const fatBox = document.createElement('div');
    fatBox.className = 'sum';
    const fatGram = document.createElement('p');
    fatGram.textContent = `${Math.ceil(fat[1])} ${fat[2]}`;
    const carbsBox = document.createElement('div');
    carbsBox.className = 'sum';
    const carbsGram = document.createElement('p');
    carbsGram.textContent = `${Math.ceil(carbs[1])} ${carbs[2]}`;

    productInput.appendChild(productBox);
    productBox.appendChild(productName);
    caloriesInput.appendChild(calorieBox);
    calorieBox.appendChild(energyKcal);
    fatInput.appendChild(fatBox);
    fatBox.appendChild(fatGram);
    carbsInput.appendChild(carbsBox);
    carbsBox.appendChild(carbsGram);
}


