//Please enter the recipe key provided in the README file between the empty quotations
export const
    recipeKey = '',
    recipeId = '1dba6a76';

import {searchRequest, randomize, searchTerm, searchedRecipes} from "./javascript/search_request";
import {createTileElement, createRetryMessage, } from "./javascript/tile_input";

// A click on the randomButton sets the randomizer to 'true' and fires a random search request
const randomButton = document.querySelector('#random-button');
randomButton.addEventListener("click", async () => {
    randomize(true);
    await searchRequest();
    //The loop is set to three and the tiles get appended to the correct element
    createTileElement('random-link', 3, 'three-tiles');
    //The element surrounding the tiles fades into visibility
    document.getElementById("three-tiles").style.opacity = '1';
});

// When the submitSearch form gets sent, the randomizer gets set to 'false' and the search request is fired
const submitSearch = document.querySelector('#search-form');
submitSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    randomize(false);
    //The user gets a message when no search term is entered
    if (searchTerm.length < 1) {
        createRetryMessage( 'Please enter a search query')
    } else {
        await searchRequest();
        // The user gets a message when no results are fetched
        if (searchedRecipes.length < 1) {
            createRetryMessage( `Your search didn't find any matches, please try something else`)
        } else {
            // The loop is set to the amount of search results and the tiles get appended to the correct element
            createTileElement('recipe-link', searchedRecipes.length, 'searched-tiles');
        }
    }
    //Surrounding element fades into visibility
    document.getElementById('searched-tiles').style.opacity = '1';
});








