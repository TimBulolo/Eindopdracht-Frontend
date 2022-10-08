import axios from "axios";
import {databaseKey,databaseId, calSearchTermUrl} from "./calculator";


export async function getCalc() {
    try {
        const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${databaseId}&app_key=${databaseKey}${calSearchTermUrl}`);
        console.log(result)
        console.log(calSearchTermUrl)
    } catch (err) {
        console.error(err)
    }
}



