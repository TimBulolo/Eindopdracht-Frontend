//Please enter the database key provided in the README file between the empty quotations on line 3
export const
    databaseKey = '',
    databaseId = 'edfb0da8';

import {
    searchFood,
    searchNutrients,
    product,
    weight,
    calSearchTerm,
} from "./database_request";

import {fillTop, fillBottom, showTotal} from "./calculator_fill"

// This is the top search form, it fires searchFood and shows the result. User gets a message if the search is not executable.
export const warning = document.getElementById('warning-one')
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
    }
});



