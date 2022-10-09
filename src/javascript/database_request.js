import axios from "axios";
import {databaseKey,databaseId, calSearchTermUrl, quantity} from "./calculator";


export async function searchFood() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        const results = result.data.hints;
        const [searchedFood] =results;
        foodId = searchedFood.food.foodId;
        measureUri = searchedFood.measures[0].uri;
        console.log(searchedFood);
        console.log(measureUri)
    } catch (err) {
        console.error(err)
    }
}




// export async function searchNutrients() {
//
// }