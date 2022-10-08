

export const
    recipeKey = '',
    recipeId = '1dba6a76';


import {sendRandomRequest} from "./javascript/random_request";
import {randomTileAppear, randomTileInput} from "./javascript/tile_input";

const randomButton = document.querySelector('#random-button');
randomButton.addEventListener("click", async () => {
    await sendRandomRequest();
    randomTileInput();
    randomTileAppear();
});

import {searchRequest} from "./javascript/search_request";
import {searchTileAppear, searchTileInput} from "./javascript/tile_input";

const submitSearch = document.querySelector('#search-form');
submitSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchRequest();
    searchTileInput();
    searchTileAppear();
});








