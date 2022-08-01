// VARIABLES
const numLineOne = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
// will need a different equation
const numLineTwo = [2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20];


/* PLAN:
 - define the number line
 - SET UP A SYSTEM WHICH RANDOMLY REPLACES A NUMBER IN THE LINE WITH AN INPUT FIELD
    - store number line in a variable
    - step 2
- MATCH THE POSITION OF THE INPUT FIELD TO THE USER INPUT
    - (pseudo) if (playerInput === numberLinePosition + 1) {return correctAnswerReaction}


THOUGHTS
- modulo 

*/


function generateFieldPosition(){

        // assigning a random whole int to a number between 1 and 20
        const randoPosition = Math.floor(Math.random() * numLineTwo.length);
        console.log(randoPosition);

    }


const correctAnswer = theNumberLine[i];
// userInput === correctAnswer ? () : renderLogin();







