import axios from "axios";
import {databaseKey, databaseId} from "./calculator";

let calSearchTermUrl = ''

document.getElementById('calorie-search-bar').addEventListener("keyup", (e) => {
    let calSearchTerm = e.target.value
    if (isNaN(calSearchTerm)) {
        calSearchTermUrl = `&ingr=${calSearchTerm}`
    } else {
        calSearchTermUrl = `&upc=${calSearchTerm}`
    }
});

export let
    product = '',
    weight = '',
    label = '';

export async function searchFood() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        const results = result.data.hints;
        const [searchedFood] = results;
        const {food} = searchedFood
        foodId = food.foodId;
        product = food.label;
        let measurePick = searchedFood.measures;
        let measureFind = await measurePick.find((serving) => {
            return serving.label === 'Serving'
        });
        weight = measureFind.weight;
        measureURI = measureFind.uri;
        console.log(searchedFood);
    } catch (err) {
        console.error(err)
    }
}

const amountInput = document.getElementById('amount-box');amountInput.addEventListener("input", (e) =>{
    quantity = Number(e.target.value)
});

let foodId = '',
    measureURI = '';
export let quantity = '';


export async function searchNutrients() {
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

export let
    energy = '',
    fat = '',
    carbs = '';
