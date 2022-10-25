import {
    searchedRecipes,
    searchedPics,
    searchedTitles,
    searchedCalories,
    searchedIngredientAmounts,
    searchedCookTimes
} from "./search_request";

export {createTileElement, createRetryMessage}

//This function removes prior search results, without it, new search results stack under the old ones instead of replacing them. it takes a 'className' parameter so that the random form doesn't remove the search form results and vice versa
function refresh(className) {
    const tiles = document.querySelectorAll(`.${className}`)
    tiles.forEach(tile => {
        tile.remove();
    });
    if (className === 'recipe-link') {
        const retryMessages = document.querySelectorAll('.retry-message');
        retryMessages.forEach(retryMessage => {
            retryMessage.remove();
        });
    }
}

//This function creates tiles containing search result data. It takes a 'className' parameter to interact with the refresh() function, a 'loop' parameter to tell the function how many tiles to build, and a 'parent' parameter to append the tiles to the correct element. every tile element is a link to the recipe page. The tiles have their own stylesheet, src/css/tile_styling.css. An HTML model of the tiles can be found in src/assets/dev_files.html
function createTileElement(className, loop, parent) {
    //First it removes old results
    refresh(className)
    const parentDiv = document.getElementById(parent);
    for (let i = 0; i < loop; i++) {
        const recipeLink = document.createElement('a');
        recipeLink.href = '../html/recipe.html'
        recipeLink.className = className
        const recipeTile = document.createElement('div');
        recipeTile.className = 'recipe-tile'
        recipeTile.id = 'searched-tile-' + i;
        //this event listener tells the recipe page what data to load via sessionStorage
        recipeTile.onclick = () => {
            sessionStorage.setItem('recipe', JSON.stringify(searchedRecipes[i]));
        }
        const tilePic = document.createElement('img');
        tilePic.className = 'tile-pic';
        tilePic.src = searchedPics[i];
        const tileText = document.createElement('div');
        tileText.className = 'tile-text';
        const recipeName = document.createElement('p');
        recipeName.className = 'recipe-name';
        recipeName.textContent = searchedTitles[i];
        const tileInfo = document.createElement('div');
        tileInfo.className = 'tile-info';
        const calIng = document.createElement('div');
        calIng.className = 'cal-ing';
        const calAmount = document.createElement('p');
        calAmount.textContent = searchedCalories[i];
        const cal = document.createElement('p');
        cal.className = 'cal-ing-min';
        cal.textContent = '\u00A0Calories |\u00A0';
        const ingAmount = document.createElement('p');
        ingAmount.textContent = searchedIngredientAmounts[i];
        const ing = document.createElement('p');
        ing.className = 'cal-ing-min';
        ing.textContent = '\u00A0Ingredients'
        const time = document.createElement('div');
        time.className = 'time';
        const clockSymbol = document.createElement('p');
        clockSymbol.className = 'cal-ing-min';
        clockSymbol.textContent = '🕐\u00A0';
        const timeAmount = document.createElement('p');
        timeAmount.textContent = searchedCookTimes[i];
        const min = document.createElement('p');
        min.className = 'cal-ing-min';
        min.textContent = '\u00A0min';

        parentDiv.appendChild(recipeLink);
        recipeLink.appendChild(recipeTile)
        recipeTile.appendChild(tilePic);
        recipeTile.appendChild(tileText);
        tileText.appendChild(recipeName);
        tileText.appendChild(tileInfo);
        tileInfo.appendChild(calIng);
        calIng.appendChild(calAmount);
        calIng.appendChild(cal);
        calIng.appendChild(ingAmount);
        calIng.appendChild(ing);
        tileInfo.appendChild(time);
        time.appendChild(clockSymbol);
        time.appendChild(timeAmount);
        time.appendChild(min);
    }
}

//This function creates error messages when search queries cannot be executed. it takes a 'text' parameter to display different messages
function createRetryMessage(text) {
    //First it removes older results
    refresh('recipe-link');
    const parentDiv = document.getElementById('bottom-half');
    const retryMessage = document.createElement('div');
    retryMessage.className = 'retry-message'
    const message = document.createElement('p');
    message.textContent = text
    parentDiv.appendChild(retryMessage);
    retryMessage.appendChild(message);
}

