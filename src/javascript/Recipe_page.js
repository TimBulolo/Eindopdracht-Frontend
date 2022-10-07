let chosenRecipe = JSON.parse(sessionStorage.getItem('recipe'));

console.log(chosenRecipe);

(function fillHeader() {
    document.getElementById('recipe_page_title').textContent = chosenRecipe.label
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




