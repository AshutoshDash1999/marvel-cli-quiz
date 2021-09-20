var readlinSync = require("readline-sync");
var chalk = require("chalk");

questionOne = {
  question: chalk.red.bold("What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? "),
  answer: "2008"
}

questionTwo = {
  question: chalk.green.bold("The Flerkens are a race of extremely dangerous aliens that resembles what? "),
  answer: "Cats"
}

questionThree = {
  question: chalk.magenta.bold("What is Captain America’s shield made of? "),
  answer: "Vibranium"
}

questionFour = {
  question: chalk.blueBright.bold("What is the name of the axe that is forged from the heat of a dying neutron star for Thor? "),
  answer: "Stormbreaker"
}

questionFive = {
  question: chalk.cyan.bold("What is the name of Thor’s hammer? "),
  answer: "Mjolnir"
}

questionBox = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var score = 0;

userName = readlinSync.question("What is your name? ");
console.log("Welcome,", chalk.blue(userName), "to the Marvel Quiz game.");

function playGame(question, answer){
  askedQuestion = readlinSync.question(question);
  if (askedQuestion.toUpperCase()==answer.toUpperCase()){
    console.log("Yes, you are right.");
    score++;
  } else{
    console.log("No buddy, it's wrong.");
  }
};

for (var looper = 0; looper<questionBox.length; looper++){
  playGame(questionBox[looper].question, questionBox[looper].answer)
};

console.log("Your total score is", chalk.bold.magenta(score));
