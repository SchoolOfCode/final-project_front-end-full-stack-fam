const theNumberLine = [0 , 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20];

/* PLAN:
 - define the number line:
    - 1 to 20 , only the even numbers

 - SET UP A SYSTEM WHICH RANDOMLY REPLACES A NUMBER IN THE LINE WITH AN INPUT FIELD
    - store number line in a variable
    - step 2
- MATCH THE POSITION OF THE INPUT FIELD TO THE USER INPUT
    - (pseudo) if (playerInput === numberLinePosition + 1) {return correctAnswerReaction}


THOUGHTS
- modulo 

*/

function generateFieldPosition(){
    // looping through the array we've defined as our number line
    for (let i = 0; i < theNumberLine.length; i++) {

        // assigning a random whole int to a number between 1 and 10
        const randoPosition = Math.floor(Math.random() * 11);

        // assign randoPosition (random number in a variable) to a position

        

    }
}


const correctAnswer = theNumberLine[i];
// userInput === correctAnswer ? () : renderLogin();








