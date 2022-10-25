import axios from "axios";
<<<<<<< HEAD
import {recipeKey, recipeId} from "../app";
import {createRetryMessage} from "./tile_input";

=======
import {recipeKey, recipeId,} from "../app";
>>>>>>> parent of 60a2046 (final touch 1)
export {randomize, searchRequest}

// These variables receive data from the searchRequest() function and get exported to create visual search results at /tile_input.js. searchTerm is used in src/app.js
export let
    searchedRecipes = '',
    searchedPics = '',
    searchedTitles = '',
    searchedCalories = '',
    searchedIngredientAmounts = '',
    searchedCookTimes = '',
    searchTerm = document.getElementById('search-term').value;

// These variables are used to create a GET url
    let
mealTypeUrl = '',
    cuisineTypeUrl = '',
    dietChoiceUrl = '',
    timeFrameUrl = '',
    randomUrl = '';

document.getElementById('search-term').addEventListener("keyup", (e) => {
    searchTerm = e.target.value;
});

// The following event listeners set url strings via the search form select inputs. if a select input gets set back to the empty start value the string is reverted to empty
document.getElementById('meal-type').addEventListener("change", (e) => {
    let mealType = e.target.value;
    if (mealType.length === 0) {
        mealTypeUrl = '';
    } else {
        mealTypeUrl = `&mealType=${mealType}`;
    }
});
document.getElementById('cuisine').addEventListener("change", (e) => {
    let cuisineType = e.target.value;
    if (cuisineType.length === 0) {
        cuisineTypeUrl = '';
    } else {
        cuisineTypeUrl = `&cuisineType=${cuisineType}`;
    }
});
document.getElementById('diet').addEventListener("change", (e) => {
    let dietChoice = e.target.value;
    if (dietChoice.length === 0) {
        dietChoiceUrl = '';
    } else {
        dietChoiceUrl = `&diet=${dietChoice}`;
    }

});
document.getElementById('time').addEventListener("change", (e) => {
    let timeFrame = e.target.value;
    if (timeFrame.length === 0) {
        timeFrameUrl = '';
    } else {
        timeFrameUrl = `&time=${timeFrame}`;
    }

});

// The randomizer function creates the main difference between the top and bottom part of the page. its sets a 'random' url string that overrides the other search inputs and shows random results when set to true
function randomize(random) {
    if (random === true) {
        randomUrl = '&random=true'
        searchTerm = 'food'
    }
    if (random === false) {
        randomUrl = '&random=false'
    }
}

//This function fires a GET request to the Edamam Recipe Search API using the created url. then it maps the results to get the data needed
async function searchRequest() {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${recipeId}&app_key=${recipeKey}&q=${searchTerm}${mealTypeUrl}${cuisineTypeUrl}${dietChoiceUrl}${timeFrameUrl}${randomUrl}`);
        const results = response.data.hits;
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