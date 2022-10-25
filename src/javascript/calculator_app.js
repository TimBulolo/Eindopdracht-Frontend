//Please enter the database key provided in the README file between the empty quotations on line 3
export const
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

// This is the top search form, it fires searchFood and shows the result. User gets a message if the search is not executable.
const warning = document.getElementById('warning')
const calorieSearchForm = document.getElementById('calorie-search-form');
calorieSearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    warning.textContent = '';
    if (calSearchTerm.length < 1) {
        warning.textContent = 'Please enter a search query';
    } else {
        await searchFood();
        if (product.length < 1 || weight.length < 1) {
            warning.textContent = 'Please try something else';
        } else {
            fillTop();
        }
    }
});

// This is the second form on the page. The user can add any amount of servings of the chosen product to the calculator. With every addition the total amount of macronutrients gets shown.
const portionForm = document.getElementById('portion-form');
portionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchNutrients();
    await fillBottom();
    showTotal('.energy-kcal', 'calories-sum', 'kcal');
    showTotal('.fat-gram', 'fat-sum', 'g');
    showTotal('.carbs-gram', 'carbs-sum', 'g');
})

// Fills existing html element with top search result
function fillTop() {
    document.getElementById('product').textContent = product;
    document.getElementById('quantity').textContent = weight;
    document.getElementById('label').textContent = 'Gram';
}

// Creates string with serving amount between brackets behind product name in fillBottom if more than 1 serving is added
function Brackets(name) {
    if (quantity > 1) {
        this.name = `(${name})`;
    } else {
        this.name = '';
    }
}

// Creates list of searched products and sum. Three macronutrients all have a separate class
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

// Adds the contents of the separate macronutrient classes
function showTotal(className, parent, unit) {
    let nutrientCategory = Array.from(document.querySelectorAll(className));
    let data = nutrientCategory.map((calorieDate) =>
        // This statement transforms the class' content into usable number values
        Number(JSON.stringify(calorieDate.firstChild.data).replace(unit, '').replace(/"/g, ''))
    );
    const total = data.reduce((partialSum, a) => partialSum + a, 0);
    document.getElementById(parent).textContent = `${total} ${unit}`;
}

