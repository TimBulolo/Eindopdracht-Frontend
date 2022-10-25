# User guide
#### _The Clueless cook web application_
![screenshot](src/assets/screenshots/homepage.jpg)

thank you for choosing to install The Clueless Cook web application. With this application you can get inspiration for your next meal. You can request recipes from the Edamam database, which has thousands of recipes available and grows larger every day.    With the calorie calculator you can find the amount of macronutrients present in any ingredient or product and add them all up.

This guide explains how to get through the installation process and launch the application. It features a requirement list and a step-by-step installation guide

### Requirements
To install and run this application the user needs to have the following present on the machine the application will run off:

- Any text-based IDE
- [Node.js](https://nodejs.org/)
- The project source folder
- Edamam API keys (provided in this document)


### Installation

##### step 1
Open the application source folder in your IDE. Inside, open up the terminal and run the following command:
```sh
npm install
```
_Having issues? check if [Node.js](https://nodejs.org/) is correctly installed on your machine._
##### step 2
Open [src/app.js](src/app.js) from the project source folder. At the top of the file, Please enter the first Edamam API key given here in between the empty quotation marks on line 3, then save.
 ```sh
b37e569eef510825f6bc61393240de80
```
 _correct:_
 ```sh
recipeKey = 'b37e569eef510825f6bc61393240de80',
```
_incorrect:_
 ```sh
recipeKey = b37e569eef510825f6bc61393240de80,
```
 ```sh
recipeKey = ''b37e569eef510825f6bc61393240de80,
```
##### Step 3
Open [src/javascript/calculator_app.js](src/javascript/calculator_app.js) from the project source file. Please enter the second Edamam API key given here in between the empty quotation marks on line 3, then save.
 ```sh
7b4f0a94414cba97dcd839e7b0fd4578
```
 _correct:_
 ```sh
databaseKey = '7b4f0a94414cba97dcd839e7b0fd4578',
```
_incorrect:_
 ```sh
databaseKey = 7b4f0a94414cba97dcd839e7b0fd4578,
```
 ```sh
databaseKey = ''7b4f0a94414cba97dcd839e7b0fd4578,
```
##### Step 4
Open up the terminal and run the following command: 
 ```sh
npm run start
```
_Having issues? Return to step 1_
##### Step 5
Click the localhost link provided by the terminal to run the application locally in your browser.

### You are now ready to start using _The Clueless Cook_  web application
_If you encounter issues during use, try to make sure the API keys are entered correctly_