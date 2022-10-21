# User guide
#### _The Clueless cook web application_

![homepage](src/assets/screenshots/homepage.jpg)


thank you for choosing to install The Clueless Cook web application. With this application you can find inspiration for your next meal by requesting recipes from the Edamam database, with thousands of recipes available and more added every day. the calorie calculator page lets you find out how many calories and macronutirents can be found in certain food products, and calculate the total amount of nutrients in a recipe.


This guide explains how to get through the installation process and launch the application. It will go over the system requirements and a step by step guide on installation

### Requirements
To install and run this application the user needs to have the following present on the machine the application will run off:

- Any textbased IDE
- Node.js
- The project source folder
- Edamam API keys (povided in this document)


### Installation

##### step 1
Open the application source folder in your IDE. Inside, open up the terminal and run the following command:
```sh
npm install
```
##### step 2
Open src/app.js from the project source folder. At the top of the file, Please enter the first Edamam API key given here in between the empty quotation marks on line 3.
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
Open src/javascript/calculator_app.js from the project source file. Please enter the second Edamam API key given here in between the empty quotation marks on line 3.
 ```sh
    7b4f0a94414cba97dcd839e7b0fd4578
```
 _correct:_
 ```sh
    recipeKey = '7b4f0a94414cba97dcd839e7b0fd4578',
```
_incorrect:_
 ```sh
    recipeKey = 7b4f0a94414cba97dcd839e7b0fd4578,
```
 ```sh
    recipeKey = ''7b4f0a94414cba97dcd839e7b0fd4578,
```
##### Step 4
Open up the terminal and run the following command to run the application locally in your browser: 
 ```sh
    npm run start
```

### You are now ready to start using _The Clueless Cook_  web application