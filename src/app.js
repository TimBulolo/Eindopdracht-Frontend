export const
    recipeKey = '',
    recipeId = '1dba6a76',
    databaseKey = '',
    databaseId = 'edfb0da8';

import {sendRandomRequest} from "./javascript/random_request";
import {randomTileAppear, randomTileInput} from "./javascript/tile_input";

{
    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener("click", async () => {
        await sendRandomRequest();
        randomTileInput();
        randomTileAppear();
    });
}


import {searchRequest} from "./javascript/search_request";
import {searchTileAppear, searchTileInput} from "./javascript/tile_input";

{
    const submitSearch = document.getElementById('search-form');
    submitSearch.addEventListener("submit", async (e) => {
        e.preventDefault();
        await searchRequest();
        searchTileInput();
        searchTileAppear();
    });
}

import {getCalc} from "./javascript/calculator";

// {
//     const productSearch = document.getElementById('calorie-search-form');
//     productSearch.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         //getCalc()
//     });
// }



