import axios from "axios";
import {databaseKey, databaseId} from "./calculator";

export {searchFood, searchNutrients};


let calSearchTerm = '',
    calSearchTermUrl = '';

const fillBar = document.getElementById('completed');
const searchBar = document.getElementById('calorie-search-bar');
searchBar.addEventListener("keyup", async (e) => {
    calSearchTerm = e.target.value;
    if (isNaN(calSearchTerm)) {
        calSearchTermUrl = `&ingr=${calSearchTerm}`;
        if (calSearchTerm.length > 1) {
            await autoFill();
            if (completed === undefined) {
                fillBar.value = '';
            } else {
                fillBar.value = completed;
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
        console.error(err)
    }
}



export let
    product = '',
    weight = '',
    label = '';

async function searchFood() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        const results = result.data.hints;
        const [searchedFood] = results;
        console.log(searchedFood);
        const {food} = searchedFood
        foodId = food.foodId;
        product = food.label;
        let measurePick = searchedFood.measures;
        let measureFind = await measurePick.find((serving) =>
            serving.label === 'Serving' || 'Cup'
        );
        weight = measureFind.weight;
        measureURI = measureFind.uri;
        console.log(result.config.url)
    } catch (err) {
        console.error(err)
    }
}

const amountInput = document.getElementById('amount-box');
amountInput.addEventListener("input", (e) => {
    quantity = Number(e.target.value)
});

let foodId = '',
    measureURI = '';
export let
    quantity = '',
    energy = '',
    fat = '',
    carbs = '';


async function searchNutrients() {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${databaseId}&app_key=${databaseKey}`,
            data: {
                'ingredients': [
                    {
                        'quantity': quantity,
                        'measureURI': measureURI,
                        'foodId': foodId
                    }
                ]
            }
        });
        const {ENERC_KCAL, FAT, CHOCDF} = response.data.totalNutrients;
        const {label: eLabel, quantity: eQuantity, unit: eUnit} = ENERC_KCAL;
        const {label: fLabel, quantity: fQuantity, unit: fUnit} = FAT;
        const {label: cLabel, quantity: cQuantity, unit: cUnit} = CHOCDF;
        energy = [eLabel, eQuantity, eUnit];
        fat = [fLabel, fQuantity, fUnit];
        carbs = [cLabel, cQuantity, cUnit];
    } catch (err) {
        console.error(err)
    }
}






