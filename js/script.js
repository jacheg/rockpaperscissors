// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


$("#shoot").click(function(){
    let userChoice = $('#input').val();
    userChoice = userChoice.toLowerCase();

    if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
        let compNum = Math.random();
        let compChoice = "paper";

        if(compNum >= 0 && compNum < .33){
          compChoice = "scissors";
        } else if(compNum > .33 && compNum <= .66){
          compChoice = "paper";
        } else{
          compChoice = "rock";
        }
        console.log(compChoice);
        console.log(compNum);

        $("#userChoice").text(userChoice);
        $("#computerChoice").text(compChoice);

        if(userChoice == compChoice){
          alert("IT'S A TIE!!!");
        } else if (userChoice == "rock" && compChoice == "paper"){
          alert("THE COMPUTER WINS!! IT'S THE END OF THE WORLD! :(. DO better next time to save humanity");
        } else if(userChoice == "rock" && compChoice == "scissors"){
          alert("You were able to defeat the robot and save humanity. YOu live to fight another day :^)");
        } else if(userChoice == "paper" && compChoice == "rock"){
          alert("You were able to defeat the robot and save humanity. YOu live to fight another day :^)");
        } else if(userChoice == "paper" && compChoice == "scissors"){
          alert("THE COMPUTER WINS!! IT'S THE END OF THE WORLD! :(. DO better next time to save humanity");
        } else if(userChoice == "scissors" && compChoice == "rock"){
          alert("THE COMPUTER WINS!! IT'S THE END OF THE WORLD! :(. DO better next time to save humanity");
        } else if(userChoice == "scissors" && compChoice == "paper"){
          alert("You were able to defeat the robot and save humanity. YOu live to fight another day :^)");
        }
    } else{
        console.log("got here", userChoice);
        alert("That is not a valid input!!");
    }
});


// DOCUMENT READY FUNCTION BELOW

