import axios from "axios";

import {recipeKey, recipeId} from "../app";

export let searchTerm = document.getElementById('search-term').value;
let
    mealType = document.getElementById('meal-type').value,
    cuisineType = document.getElementById('cuisine').value,
    dietChoice = document.getElementById('diet').value,
    timeFrame = document.getElementById('time').value,

    mealTypeUrl = '',
    cuisineTypeUrl = '',
    dietChoiceUrl = '',
    timeFrameUrl = '';
document.getElementById('search-term').addEventListener("keyup", (e) => {
    searchTerm = e.target.value;
});
document.getElementById('meal-type').addEventListener("change", (e) => {
    mealType = e.target.value;
    mealTypeUrl = `&mealType=${mealType}`
});
document.getElementById('cuisine').addEventListener("change", (e) => {
    cuisineType = e.target.value
    cuisineTypeUrl = `&cuisineType=${cuisineType}`
});
document.getElementById('diet').addEventListener("change", (e) => {
    dietChoice = e.target.value
    dietChoiceUrl = `&diet=${dietChoice}`
});
document.getElementById('time').addEventListener("change", (e) => {
    timeFrame = e.target.value
    timeFrameUrl = `&time=${timeFrame}`
});

export let
    searchedRecipes = '',
    searchedPics = '',
    searchedTitles = '',
    searchedCalories = '',
    searchedIngredientAmounts = '',
    searchedCookTimes = '';


export async function searchRequest() {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${recipeId}&app_key=${recipeKey}&q=${searchTerm}${mealTypeUrl}${cuisineTypeUrl}${dietChoiceUrl}${timeFrameUrl}`);
        let results = response.data.hits;
        searchedRecipes = results.map((result) =>
            result.recipe
        );
        searchedPics = searchedRecipes.map((searchedPic) =>
            searchedPic.image
        );
        searchedTitles = searchedRecipes.map((searchedTitle) =>
            searchedTitle.label
        );
        searchedCalories = searchedRecipes.map((searchedCalorie) =>
            Math.ceil(searchedCalorie.calories)
        );
        searchedIngredientAmounts = searchedRecipes.map((searchedIngredientAmount) =>
            searchedIngredientAmount.ingredients.length
        );
        searchedCookTimes = searchedRecipes.map((searchedCookTime) =>
            searchedCookTime.totalTime
        );
        console.log(response.config.url)
    } catch (err) {
        console.error(err)
    }
}