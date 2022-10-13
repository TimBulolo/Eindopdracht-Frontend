import axios from "axios";
import {recipeKey, recipeId,} from "../app";
export {randomize, searchRequest}

export let
    searchTerm = document.getElementById('search-term').value,
    searchedRecipes = '',
    searchedPics = '',
    searchedTitles = '',
    searchedCalories = '',
    searchedIngredientAmounts = '',
    searchedCookTimes = '';

let
    mealTypeUrl = '',
    cuisineTypeUrl = '',
    dietChoiceUrl = '',
    timeFrameUrl = '',
    randomUrl = '';

document.getElementById('search-term').addEventListener("keyup", (e) => {
    searchTerm = e.target.value;
});
document.getElementById('meal-type').addEventListener("change", (e) => {
    let mealType = e.target.value;
    if (mealType.length === 0){
        mealTypeUrl = ''
    } else {
        mealTypeUrl = `&mealType=${mealType}`
    }
});
document.getElementById('cuisine').addEventListener("change", (e) => {
    let cuisineType = e.target.value
    if (cuisineType.length === 0){
        cuisineTypeUrl = ''
    } else {
        cuisineTypeUrl = `&cuisineType=${cuisineType}`
    }
});
document.getElementById('diet').addEventListener("change", (e) => {
    let dietChoice = e.target.value
    if (dietChoice.length === 0){
        dietChoiceUrl = ''
    } else {
        dietChoiceUrl = `&diet=${dietChoice}`
    }

});
document.getElementById('time').addEventListener("change", (e) => {
    let timeFrame = e.target.value
    if (timeFrame.length === 0){
        timeFrameUrl = ''
    } else {
        timeFrameUrl = `&time=${timeFrame}`
    }

});

function randomize(random) {
    if (random === true){
        randomUrl = '&random=true'
        searchTerm = 'food'
    } if (random === false) {
        randomUrl = '&random=false'
    }
}

async function searchRequest() {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${recipeId}&app_key=${recipeKey}&q=${searchTerm}${mealTypeUrl}${cuisineTypeUrl}${dietChoiceUrl}${timeFrameUrl}${randomUrl}`);
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