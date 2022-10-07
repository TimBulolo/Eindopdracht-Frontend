
import {randomRecipes, randomPics, randomTitles, randomCalories, randomIngredientAmounts, randomCookTimes} from "./random_request";
export {randomTileAppear, randomTileInput}


function randomTileAppear() {
    const randomTile = document.getElementById("three-tiles");
        randomTile.style.opacity = '1';
}
function randomTileInput() {
    const tiles = document.querySelectorAll('.random-tile')
    tiles.forEach(tile => {
        tile.remove();
    });
    const randomTiles = document.getElementById('three-tiles');
    for (let i=0; i<3; i++) {
        let randomTile = document.createElement('DIV');
        randomTile.className = 'random-tile';
        randomTile.id = 'random-tile-' + i;
        randomTile.onclick = () => {
            sessionStorage.setItem('recipe', JSON.stringify(randomRecipes[i]));
            window.location.href = '../html/recipe.html'
        }
        let tilePic = document.createElement('IMG');
        tilePic.className = 'tile-pic';
        tilePic.src = randomPics[i];
        let tileText = document.createElement('DIV');
        tileText.className = 'tile-text';
        let recipeName = document.createElement('P');
        recipeName.className = 'recipe-name';
        recipeName.textContent = randomTitles[i];
        let tileInfo = document.createElement('DIV');
        tileInfo.className = 'tile-info';
        let calIng = document.createElement('DIV');
        calIng.className = 'cal-ing';
        let calAmount = document.createElement('P');
        calAmount.textContent = randomCalories[i];
        const cal = document.createElement('p');
        cal.className = 'cal-ing-min';
        cal.textContent = '\u00A0Calories |\u00A0';
        let ingAmount = document.createElement('p');
        ingAmount.textContent = randomIngredientAmounts[i];
        const ing = document.createElement('p');
        ing.className = 'cal-ing-min';
        ing.textContent = '\u00A0Ingredients'
        let time = document.createElement('div');
        time.className = 'time';
        const clockSymbol = document.createElement('p');
        clockSymbol.className = 'cal-ing-min';
        clockSymbol.textContent = '🕐\u00A0';
        let timeAmount =document.createElement('p');
        timeAmount.textContent = randomCookTimes[i];
        const min = document.createElement('p');
        min.className = 'cal-ing-min';
        min.textContent = '\u00A0min';

        randomTiles.appendChild(randomTile);
        randomTile.appendChild(tilePic);
        randomTile.appendChild(tileText);
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

import {searchedRecipes, searchedPics, searchedTitles, searchedCalories, searchedIngredientAmounts, searchedCookTimes} from "./search_request";
import {searchTerm} from "./search_request";
export {searchTileAppear, searchTileInput}

function searchTileAppear() {
    const searchTile = document.getElementById('searched-tiles');
    searchTile.style.opacity = '1'
}

function searchTileInput() {
    const tiles = document.querySelectorAll('.recipe-tile')
    tiles.forEach(tile => {
        tile.remove();
    });
    const retries = document.querySelectorAll('.retry');
    retries.forEach(retry => {
        retry.remove();
    });
    const bottomHalf = document.getElementById('bottom-half');
    if (searchTerm.length < 1) {
        const retry = document.createElement('div');
        retry.className = 'retry'
        const message = document.createElement('p');
        message.textContent = 'Please enter a search query '
        bottomHalf.appendChild(retry);
        retry.appendChild(message);
    } else {
        if (searchedRecipes.length < 1) {
            const retry = document.createElement('div');
            retry.className = 'retry'
            const message = document.createElement('p');
            message.textContent = `Your search didn't find any matches, please try something else `
            bottomHalf.appendChild(retry);
            retry.appendChild(message);
        } else {
            const searchedTiles = document.getElementById('searched-tiles');
            for (let i = 0; i < searchedRecipes.length; i++) {
                let recipeTile = document.createElement('div');
                recipeTile.className = 'recipe-tile';
                recipeTile.id = 'searched-tile-' + i;
                recipeTile.onclick = () => {
                    sessionStorage.setItem('recipe', JSON.stringify(searchedRecipes[i]));
                    window.location.href = '../html/recipe.html'
                }
                let tilePic = document.createElement('img');
                tilePic.className = 'tile-pic';
                tilePic.src = searchedPics[i];
                let tileText = document.createElement('div');
                tileText.className = 'tile-text';
                let recipeName = document.createElement('p');
                recipeName.className = 'recipe-name';
                recipeName.textContent = searchedTitles[i];
                let tileInfo = document.createElement('div');
                tileInfo.className = 'tile-info';
                let calIng = document.createElement('div');
                calIng.className = 'cal-ing';
                let calAmount = document.createElement('p');
                calAmount.textContent = searchedCalories[i];
                const cal = document.createElement('p');
                cal.className = 'cal-ing-min';
                cal.textContent = '\u00A0Calories |\u00A0';
                let ingAmount = document.createElement('p');
                ingAmount.textContent = searchedIngredientAmounts[i];
                const ing = document.createElement('p');
                ing.className = 'cal-ing-min';
                ing.textContent = '\u00A0Ingredients'
                let time = document.createElement('div');
                time.className = 'time';
                const clockSymbol = document.createElement('p');
                clockSymbol.className = 'cal-ing-min';
                clockSymbol.textContent = '🕐\u00A0';
                let timeAmount = document.createElement('p');
                timeAmount.textContent = searchedCookTimes[i];
                const min = document.createElement('p');
                min.className = 'cal-ing-min';
                min.textContent = '\u00A0min';

                searchedTiles.appendChild(recipeTile);
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
    }
}