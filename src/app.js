import {getCalc} from "./javascript/calculator";

export const
    recipeKey = 'b37e569eef510825f6bc61393240de80',
    recipeId = '1dba6a76',
    databaseKey = '7b4f0a94414cba97dcd839e7b0fd4578',
    databaseId = 'edfb0da8';
import {sendRandomRequest} from "./javascript/random_request";
import {randomTileAppear, randomTileInput} from "./javascript/tile_input";
import {searchRequest} from "./javascript/search_request";
import {searchTileAppear, searchTileInput} from "./javascript/tile_input";


let currentPage = document.body.id;
switch (currentPage) {
    case 'calculator-main':
        calorieCalculator();
        break;
    case 'home-page':
        recipeSearch();
        break;
}

function recipeSearch() {
    const randomButton = document.querySelector('#random-button');
    randomButton.addEventListener("click", async () => {
        await sendRandomRequest();
        randomTileInput();
        randomTileAppear();
    });

    const submitSearch = document.querySelector('#search-form');
    submitSearch.addEventListener("submit", async (e) => {
        e.preventDefault();
        await searchRequest();
        searchTileInput();
        searchTileAppear();
    });
}

function calorieCalculator() {
    const calorieSearch = document.querySelector('#calorie-search-form');
    calorieSearch.addEventListener("submit", async (e) => {
        e.preventDefault();
        await getCalc();
    })
}




