import axios from "axios";
import {databaseKey, databaseId} from "../app";

export async function getCalc() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}&ingr=rice`);
        console.log(result)
    } catch (err) {
        console.error(err)
    }

}




