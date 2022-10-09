
export let
    databaseKey = '',
    databaseId = 'edfb0da8';

import {searchFood, searchNutrients} from "./database_request";

export let calSearchTermUrl = ''
document.getElementById('calorie-search-bar').addEventListener("keyup", (e) => {
    let calSearchTerm = e.target.value
    if (isNaN(calSearchTerm)) {
        calSearchTermUrl = `&ingr=${calSearchTerm}`
    } else {
        calSearchTermUrl = `&upc=${calSearchTerm}`
    }
});

document.getElementById('calorie-search-form').addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchFood();
});




document.getElementById('add-button').addEventListener("click", async () => {
    await searchNutrients()
})




