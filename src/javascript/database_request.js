import axios from "axios";
import {databaseKey, databaseId} from "./calculator_app";

export {searchFood, searchNutrients};

export let calSearchTerm = ''
let calSearchTermUrl = '';

// Two inputs css'd on top of each other, one for user input, one (inactive) for the autofill function.
const fillBar = document.getElementById('completed');
const searchBar = document.getElementById('calorie-search-bar');
searchBar.addEventListener("keyup", async (e) => {
    calSearchTerm = e.target.value;
    // isNaN check for correct url string
    if (isNaN(calSearchTerm)) {
        calSearchTermUrl = `&ingr=${calSearchTerm}`;
        // Start autoFill and erase fillBar when searchBar is empty
        if (calSearchTerm.length > 1) {
            await autoFill();
            // Fills fillBar and clears fillBar if autoFill doesnt get result
            if (completed !== undefined) {
                fillBar.value = completed;
            } else {
                fillBar.value = '';
            }
        } else {
            fillBar.value = '';
        }
    } else {
        // Bar code searches have their own url string
        calSearchTermUrl = `&upc=${calSearchTerm}`;
    }
    // User presses right arrow key to copy fillBar to searchBar
    if (e.key === 'ArrowRight') {
        searchBar.value = fillBar.value;
        calSearchTermUrl = `&ingr=${fillBar.value}`;
    }
});

// Variable for autoFill results
let completed = '';

// the autofill function.
async function autoFill() {
    try {
        const response = await axios.get(
            `https://api.edamam.com/auto-complete?app_id=${databaseId}&app_key=${databaseKey}&q=${calSearchTerm}`);
        // Only top result is needed
        completed = response.data[0];
    } catch (err) {
        console.error(err);
        // Clears fillBar when request fails
        fillBar.value = '';
    }
}

export let
    product = '',
    weight = '';

// The product search function. It fills the variables above for the fillTop function
async function searchFood() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        const results = result.data.hints;
        const [searchedFood] = results;
        const {food} = searchedFood;
        foodId = food.foodId;
        product = food.label;
        let measurePick = searchedFood.measures;
        // finds 'Serving' measure or 'Cup' measure
        let measureFind = await measurePick.find((serving) =>
            serving.label === 'Serving' || 'Cup'
        );
        weight = Number(Math.ceil(measureFind.weight));
        measureURI = measureFind.uri;
    } catch (err) {
        console.error(err);
    }
}

// The serving amount form. Quantity is set to minimum of 1
const amountInput = document.getElementById('amount-box');
amountInput.addEventListener("input", (e) => {
    quantity = Number(e.target.value)
});

// These variables are for the fillBottom function.
export let
    quantity = 1,
    // To be filled by searchNutrients
    energy = '',
    fat = '',
    carbs = '';

let foodId = '',
    measureURI = '',
    ingredients = [];
// This function constructs an object for the POST request using the above variables.
function Ingredients(q, m, f) {
    this.quantity = q;
    this.measureURI = m;
    this.foodId = f;
}

// Search function for macronutrients values multiplied by serving amount
async function searchNutrients() {
    // Fills ingredients array with (only one) object.
    ingredients.splice(0, 1, new Ingredients(quantity, measureURI, foodId))
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${databaseId}&app_key=${databaseKey}`,
            data: {
                ingredients
            }
        });
        const {ENERC_KCAL, FAT, CHOCDF} = response.data.totalNutrients;
        const {label: eLabel, quantity: eQuantity, unit: eUnit} = ENERC_KCAL;
        const {label: fLabel, quantity: fQuantity, unit: fUnit} = FAT;
        const {label: cLabel, quantity: cQuantity, unit: cUnit} = CHOCDF;
        // Data gets deconstructed and put in arrays.
        energy = [eLabel, Number(Math.ceil(eQuantity)), eUnit];
        fat = [fLabel, Number(Math.ceil(fQuantity)), fUnit];
        carbs = [cLabel, Number(Math.ceil(cQuantity)), cUnit];
    } catch (err) {
        console.error(err);
    }
}






