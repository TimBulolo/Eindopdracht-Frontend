import {
    searchedRecipes,
    searchedPics,
    searchedTitles,
    searchedCalories,
    searchedIngredientAmounts,
    searchedCookTimes
} from "./search_request";

export {createTileElement, createRetryMessage}

function refresh (className) {
    const tiles = document.querySelectorAll(`.${className}`)
    tiles.forEach(tile => {
        tile.remove();
    });
    const retries = document.querySelectorAll('.retry');
    retries.forEach(retry => {
        retry.remove();
    });
}

function createTileElement(className, loop, parent) {
    refresh(className)
    const parentDiv = document.getElementById(parent);
    for (let i = 0; i < loop; i++) {
        const recipeLink = document.createElement('a');
        recipeLink.href = '../html/recipe.html'
        recipeLink.className = className
        const recipeTile = document.createElement('div');
        recipeTile.className = 'recipe-tile'
        recipeTile.id = 'searched-tile-' + i;
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

function createRetryMessage(parent, text) {
    refresh('recipe-link');
    const parentDiv = document.getElementById(parent);
    const retry = document.createElement('div');
    retry.className = 'retry'
    const message = document.createElement('p');
    message.textContent = text
    parentDiv.appendChild(retry);
    retry.appendChild(message);
}

