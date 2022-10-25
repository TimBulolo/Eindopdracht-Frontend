import axios from "axios";
<<<<<<< HEAD
import {databaseKey, databaseId, warning} from "./calculator_app";
=======
import {databaseKey, databaseId} from "./calculator";
>>>>>>> parent of 60a2046 (final touch 1)

export {searchFood, searchNutrients};

export let calSearchTerm = ''
let calSearchTermUrl = '';

const fillBar = document.getElementById('completed');
const searchBar = document.getElementById('calorie-search-bar');
searchBar.addEventListener("keyup", async (e) => {
    calSearchTerm = e.target.value;
    if (isNaN(calSearchTerm)) {
        calSearchTermUrl = `&ingr=${calSearchTerm}`;
        if (calSearchTerm.length > 1) {
            await autoFill();
            if (completed !== undefined) {
                fillBar.value = completed;
            } else {
                fillBar.value = '';
            }
        } else {
            fillBar.value = '';
        }
    } else {
        calSearchTermUrl = `&upc=${calSearchTerm}`;
    }
    if (e.key === 'ArrowRight') {
        searchBar.value = fillBar.value;
        calSearchTermUrl = `&ingr=${fillBar.value}`;
    }
});

let completed = '';

async function autoFill() {
    try {
        const response = await axios.get(
            `https://api.edamam.com/auto-complete?app_id=${databaseId}&app_key=${databaseKey}&q=${calSearchTerm}`);
        completed = response.data[0];
    } catch (err) {
<<<<<<< HEAD
        console.error(err);
        // Clears fillBar when request fails.
        fillBar.value = '';
=======
        console.error(err)
>>>>>>> parent of 60a2046 (final touch 1)
    }
}

export let
    product = '',
    weight = '';


async function searchFood() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        const results = result.data.hints;
        const [searchedFood] = results;
        const {food} = searchedFood
        foodId = food.foodId;
        product = food.label;
        let measurePick = searchedFood.measures;
        let measureFind = await measurePick.find((serving) =>
            serving.label === 'Serving' || 'Cup'
        );
        weight = Number(Math.ceil(measureFind.weight));
        measureURI = measureFind.uri;
        console.log(searchedFood)
    } catch (err) {
<<<<<<< HEAD
        console.error(err);
        warning.textContent = 'Something went wrong on our side, please refresh the page and try again';
=======
        console.error(err)
>>>>>>> parent of 60a2046 (final touch 1)
    }
}

const amountInput = document.getElementById('amount-box');
amountInput.addEventListener("input", (e) => {
    quantity = Number(e.target.value)
});

export let
    quantity = 1,
    energy = '',
    fat = '',
    carbs = '';

let foodId = '',
    measureURI = '',
    ingredients = [];

function Ingredients(q, m, f) {
    this.quantity = q
    this.measureURI = m
    this.foodId = f;
}

async function searchNutrients() {
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
        energy = [eLabel, Number(Math.ceil(eQuantity)), eUnit];
        fat = [fLabel, Number(Math.ceil(fQuantity)), fUnit];
        carbs = [cLabel, Number(Math.ceil(cQuantity)), cUnit];
    } catch (err) {
<<<<<<< HEAD
        console.error(err);
        warning.textContent = 'Something went wrong on our side, please refresh the page and try again';
=======
        console.error(err)
>>>>>>> parent of 60a2046 (final touch 1)
    }
}






