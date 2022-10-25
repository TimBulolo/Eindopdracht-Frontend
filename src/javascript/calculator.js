//Please enter the database key provided in the README file between the empty quotations
export let
    databaseKey = '',
    databaseId = 'edfb0da8';

import {
    searchFood,
    searchNutrients,
    product,
    weight,
    calSearchTerm,
} from "./database_request";

<<<<<<< HEAD:src/javascript/calculator_app.js
import {fillTop, fillBottom, showTotal} from "./calculator_fill"

// This is the top search form, it fires searchFood and shows the result. User gets a message if the search is not executable.
export const warning = document.getElementById('warning-one')
const calorieSearchForm = document.getElementById('calorie-search-form');
calorieSearchForm.addEventListener("submit", async (e) => {
=======

document.getElementById('calorie-search-form').addEventListener("submit", async (e) => {
>>>>>>> parent of 60a2046 (final touch 1):src/javascript/calculator.js
    e.preventDefault();
    if (calSearchTerm.length < 1) {
        document.getElementById('warning').textContent = 'Please enter a search query'
    } else {
        await searchFood();
<<<<<<< HEAD:src/javascript/calculator_app.js
        if (product.length < 1 || weight.length < 1) {
            warning.textContent = 'Please try something else';
        } else {
            fillTop();
            searchSuccess = true;
        }
    }
});

let searchSuccess = false;

// This is the second form on the page. The user can add any amount of servings of the chosen product to the calculator. With every addition the total amount of macronutrients gets shown. A message is shown when no product is selected.
const portionForm = document.getElementById('portion-form');
portionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (searchSuccess === false) {
        warning.textContent = 'Please search a product first';
    } else {
        warning.textContent = '';
        await searchNutrients();
        await fillBottom();
        showTotal('.energy-kcal', 'calories-sum', 'kcal');
        showTotal('.fat-gram', 'fat-sum', 'g');
        showTotal('.carbs-gram', 'carbs-sum', 'g');
=======
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
>>>>>>> parent of 60a2046 (final touch 1):src/javascript/calculator.js
    }
});

<<<<<<< HEAD:src/javascript/calculator_app.js

=======
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
>>>>>>> parent of 60a2046 (final touch 1):src/javascript/calculator.js

