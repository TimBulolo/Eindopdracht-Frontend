import {carbs, energy, fat, product, quantity, weight} from "./database_request";

export {fillTop, fillBottom, showTotal};

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