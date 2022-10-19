export let
    databaseKey = '',
    databaseId = 'edfb0da8';

import {
    searchFood,
    searchNutrients,
    product,
    weight,
    energy,
    fat,
    carbs,
    quantity,
    calSearchTerm,
} from "./database_request";


document.getElementById('calorie-search-form').addEventListener("submit", async (e) => {
    e.preventDefault();
    if (calSearchTerm.length < 1) {
        document.getElementById('warning').textContent = 'Please enter a search query'
    } else {
        await searchFood();
        fillTop();
    }
});


document.getElementById('portion-form').addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchNutrients();
    await fillBottom();
    showTotal('.energy-kcal', 'calories-sum', 'kcal');
    showTotal('.fat-gram', 'fat-sum', 'g');
    showTotal('.carbs-gram', 'carbs-sum', 'g');
})

function fillTop() {
    document.getElementById('product').textContent = product;
    document.getElementById('quantity').textContent = weight;
    document.getElementById('label').textContent = 'Gram';
}


function Brackets(name) {
    if (quantity > 1) {
        this.name = `(${name})`
    } else {
        this.name = ''
    }
}

function fillBottom() {
    const productInput = document.getElementById('product-input');
    const caloriesInput = document.getElementById('calories-input');
    const fatInput = document.getElementById('fat-input');
    const carbsInput = document.getElementById('carbs-input');
    const productBox = document.createElement('div');
    productBox.className = 'sum';
    const productName = document.createElement('p');
    productName.textContent = product + new Brackets(quantity).name;
    const calorieBox = document.createElement('div');
    calorieBox.className = 'sum';
    const energyKcal = document.createElement('p');
    energyKcal.textContent = `${energy[1]} ${energy[2]}`;
    energyKcal.className = 'energy-kcal';
    const fatBox = document.createElement('div');
    fatBox.className = 'sum';
    const fatGram = document.createElement('p');
    fatGram.textContent = `${fat[1]} ${fat[2]}`;
    fatGram.className = 'fat-gram';
    const carbsBox = document.createElement('div');
    carbsBox.className = 'sum';
    const carbsGram = document.createElement('p');
    carbsGram.textContent = `${carbs[1]} ${carbs[2]}`;
    carbsGram.className = 'carbs-gram';

    productInput.appendChild(productBox);
    productBox.appendChild(productName);
    caloriesInput.appendChild(calorieBox);
    calorieBox.appendChild(energyKcal);
    fatInput.appendChild(fatBox);
    fatBox.appendChild(fatGram);
    carbsInput.appendChild(carbsBox);
    carbsBox.appendChild(carbsGram);
}

function showTotal(className, parent, unit) {
    let nutrientCategory = Array.from(document.querySelectorAll(className));
    let data = nutrientCategory.map((calorieDate) =>
        Number(JSON.stringify(calorieDate.firstChild.data).replace(unit, '').replace(/"/g, ''))
    );
    const total = data.reduce((partialSum, a) => partialSum + a, 0);
    document.getElementById(parent).textContent = `${total} ${unit}`;
}

