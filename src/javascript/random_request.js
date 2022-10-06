import axios from "axios"
import { recipeKey, recipeId } from "../app";

export let
    randomRecipes = '',
    randomPics = '',
    randomTitles = '',
    randomCalories = '',
    randomIngredientAmounts = '',
    randomCookTimes = '';

export async function sendRandomRequest() {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${recipeId}&app_key=${recipeKey}&q=chicken&random=true`);
        let results = response.data.hits;
        randomRecipes = results.map((result) =>
            result.recipe
        );
        randomPics = randomRecipes.map((randomPic) =>
            randomPic.image
        );
        randomTitles = randomRecipes.map((randomTitle) =>
            randomTitle.label
        );
        randomCalories = randomRecipes.map((randomCalorie) =>
            Math.ceil(randomCalorie.calories)
        );
        randomIngredientAmounts = randomRecipes.map((randomIngredientAmount) =>
            randomIngredientAmount.ingredients.length
        );
        randomCookTimes = randomRecipes.map((randomCookTime) =>
            randomCookTime.totalTime
        );
    } catch (err) {
        console.error(err);
    }
}