let chosenRecipe = JSON.parse(sessionStorage.getItem('recipe'));

console.log(chosenRecipe);

(function fillHeader() {
    document.getElementById('recipe-page-title').textContent = `${chosenRecipe.label}\u00A0\u00A0\u00A0\u00A0`;
    document.getElementById('recipe-page-time').textContent =
        `\u00A0${chosenRecipe.totalTime}\u00A0`;
    document.getElementById('recipe-page-pic').src =
    chosenRecipe.image;
})();

(function fillIngredientsList() {
    const ingredientsList = document.getElementById('ingredients-list');
    const listItems = chosenRecipe.ingredientLines;
    for (let item of listItems) {
        let newItem = document.createElement('li');
        newItem.textContent = item;
        ingredientsList.appendChild(newItem);
    }
})();

(function fillHealthLabels() {
    const healthLabels = document.getElementById('heath-labels');
    const labelList = chosenRecipe.healthLabels;
    for (let label of labelList) {
        const labelBox = document.createElement('DIV');
        labelBox.className = 'label-box'
        const labelText = document.createElement('p');
        labelText.textContent = label;
        healthLabels.appendChild(labelBox);
        labelBox.appendChild(labelText)
    }
})();

(function fillNutrients() {
    const nutrients = chosenRecipe.totalNutrients;
    document.getElementById('e-value').textContent = Math.ceil(nutrients.ENERC_KCAL.quantity);
    document.getElementById('e-unit').textContent = nutrients.ENERC_KCAL.unit;
    document.getElementById('f-value').textContent = Math.ceil(nutrients.FAT.quantity);
    document.getElementById('f-unit').textContent = nutrients.FAT.unit;
    document.getElementById('c-value').textContent = Math.ceil(nutrients.CHOCDF.quantity);
    document.getElementById('c-unit').textContent = nutrients.CHOCDF.unit;
    document.getElementById('s-value').textContent = Math.ceil(nutrients.SUGAR.quantity);
    document.getElementById('s-unit').textContent = nutrients.SUGAR.unit;
    document.getElementById('p-value').textContent = Math.ceil(nutrients.PROCNT.quantity);
    document.getElementById('p-unit').textContent = nutrients.PROCNT.unit;
    document.getElementById('sod-value').textContent = Math.ceil(nutrients.NA.quantity);
    document.getElementById('sod-unit').textContent = nutrients.NA.unit;
})();




