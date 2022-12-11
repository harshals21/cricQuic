var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.magentaBright("Let's see how well you know about Cricket 🏏 \n"));

var userName = readlineSync.question(chalk.yellowBright("Please enter your name: \n"));

console.log(chalk.magentaBright("\nHi " + userName + "👋\nEnter a/b/c as response to each question."));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Congrats! You are right :)"));
    score++;
  } 
  else {
    console.log(chalk.bold.red("Oops! You are wrong :("));
  }
  console.log(chalk.bold.yellowBright("Your current score is " + score));
  console.log("\n======================\n")
}

var allQuestions = [{
  question: "1. Who is known as the God of Cricket?\na. Sachin Tendulkar\nb. Rahul Dravid\nc. VVS Laxman\n\n",
  answer: "a"
}, {
  question: "2. Which player holds the record of highest wicket taker in Test Cricket?\na. Shane Warne\nb. James Anderson\nc. M Muralidaran\n\n",
  answer: "c"
}, {
  question: "3. What is the highest international individual score in ODI cricket?\na. 275\nb. 264\nc. 219\n\n",
  answer: "b"
}, {
  question: "4. Who holds the record of most runs in a single IPL season? \na. Cris Gayle\nb. Virat Kohli\nc. KL Rahul\n\n",
  answer: "b"
}, {
  question: "5. In which year was MS Dhoni appointed Indian captain?\na. 2007\nb. 2005\nc. 2004\n\n",
  answer: "a"
}, {
  question: "6. Which famous Indian cricketer is nicknamed 'Jammy'?\na. Yuvraj Singh\nb. Rahul Dravid\nc. Irfan Pathan\n\n",
  answer: "b"
}, {
  question: "7. Where is the world's biggest cricket stadium located?\na. Melbourne\nb. Kolkata\nc. Ahmedabad\n\n",
  answer: "c"
}, {
  question: "8. Which wicket-keeper do you often hear chanting 'Come on Ash!' when ever Ashwin bowls? \na. Jos Buttler\nb. Rishabh Pant\nc. Dinesh Karthik\n\n",
  answer: "b"
}, {
  question: "9. Which cricketer is considered to be a relative late comer and is still known as 'Mr. Cricket'?\na. Michael Hussey\nb. Rangana Herath\nc. AB de villiers\n\n",
  answer: "a"
}, {
  question: "10. Who is the manufacturer of the red balls used in Tests in India? \na. Dukes\nb. Kookaburra\nc. SG\n\n",
  answer: "c"
}];

var highScore=[
  {name:"Harshal", topScore:"10"},
  {name:"Rohan", topScore:"9"},
  {name:"Raj", topScore:"7"},
];

for (var i = 0; i < allQuestions.length; i++) {
    var currentQues = allQuestions[i];
    play(currentQues.question, currentQues.answer);
}

console.log(chalk.hex('#DEADED').bold("Woahh! YOUR TOTAL SCORE IS "+score));


 console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));
 printScoreBoard(highScore);

var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}
console.log('=======================================');

if(scoreBeaten){
  console.log(chalk.bold.keyword('pink')("Congratulations "+userName+", you have beaten the Scoreboard!!."));

  console.log(chalk.keyword('orange').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard ;) \n\n\n\n");
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", seems like you don't watch cricket anymore :p"))
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.cyan.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}