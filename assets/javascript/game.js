// Game.js

// variables declaration
 var wins=0;
 var losses=0;
 var guessesLeft=9;
 var yourGuessessofar = [];
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

 //random letter creation 
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 // Keyed input by user
  document.onkeyup = function(event){

  var userGuess=event.key;
 console.log(computerGuess);

 // comparison between userGuess & ComputerGuess, if they are not equal, the user loses
   if ( userGuess !== computerGuess){
     guessesLeft--;
     yourGuessessofar.push(userGuess);
                                    }

 //comparison between userGuess & ComputerGuess, if they are equal, the user wins
   if (userGuess === computerGuess){
       wins++;
       restartGame();
                                    }


 // Reset the game and increase the losses if user cannot guess the right letter after 9 occurence
   if (guessesLeft === 0){
       losses++;
       restartGame();
                         }


 function restartGame(){
     yourGuessessofar = [];
     guessesLeft=9;
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                       }


// Results display via innerHtml
   document.getElementById("wins-text").innerHTML="<p> Wins:" + wins + "</p>" ;

   document.getElementById("Losses-text").innerHTML="<p>Losses:" + losses + "</p>";

   document.getElementById("Guessesleft-text").innerHTML= "<p>Guesses Left:" + guessesLeft + "</p>";

   document.getElementById("yourguessessofar-text").innerHTML=	"<p>Your Guesses so far:" + yourGuessessofar +"</p>";
                                  
                                        }
