
export const
    recipeKey = '',
    recipeId = '1dba6a76';

import {searchRequest, randomize, searchTerm, searchedRecipes} from "./javascript/search_request";
import {createTileElement, createRetryMessage, } from "./javascript/tile_input";

const randomButton = document.querySelector('#random-button');
randomButton.addEventListener("click", async () => {
    randomize(true);
    await searchRequest();
    createTileElement('random-link', 3, 'three-tiles');
    document.getElementById("three-tiles").style.opacity = '1';
});


const submitSearch = document.querySelector('#search-form');
submitSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    randomize(false);
    await searchRequest();
    if (searchTerm.length < 1) {
        createRetryMessage('bottom-half', 'Please enter a search query')
    } else {
        if (searchedRecipes.length < 1) {
            createRetryMessage('bottom-half', `Your search didn't find any matches, please try something else`)
        } else {
            createTileElement('recipe-link', searchedRecipes.length, 'searched-tiles');
        }
    }
    document.getElementById('searched-tiles').style.opacity = '1';
});








