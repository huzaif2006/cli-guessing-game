#! /usr/bin/env node

// Number guessing game by using typescript and inquirer

// Import inquirer from npm libraray
import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    message: "Please guess a number between 1 to 6",
    type: "number",
  },
]);
//  Using conditional statement for guessing the correct number
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed right number.");
} else {
  console.log("Oops! you guessed a wrong number please try again.");
};
