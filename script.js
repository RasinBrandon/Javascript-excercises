let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate random target number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

// ******************************************Compare guess function - Decides who is closest - computer or human ************************************************

const compareGuesses = (human, computer, target) => { // easy cases that require no further calculations 
    if (human < 0 || human > 9) {
        alert('Your guess is not between 0 and 9');
    } else if (human === computer) { // Human and computer have the same guess - human wins
        return true;
    } else if (human === target) { // Human hits target - human wins 
        return true;
    } else if (computer === target) { // computer hits target - computer wins 
        return false;
    }

        const guessDiff = (guess, target) => { // function to determine difference between a guess and the target ****************** 
            if (guess > target) { // if guess is greater than target then subtract target from guess 
                return guess - target;
            } else { //otherwise subtract guess from target
                return target - guess;
            }
        }
    if (guessDiff(human, target) < guessDiff(computer, target)) { // human difference is less than computer difference  - human wins 
        return true;
    } else { // computer difference is less than human difference - computer wins 
        return false;
    }
};

/* Testing 
console.log(compareGuesses(2, 5, 6)); ///// computer wins 
console.log(compareGuesses(5, 4, 6)) // Human wins 
console.log(compareGuesses(6, 5, 6)) // human hits target 
console.log(compareGuesses(2, 6, 6)) // computer hits target 
console.log(compareGuesses(6, 6, 6)) // both hit target
console.log(compareGuesses(5, 5, 6)) // both have the same difference 
*/


//******************Update score function */
const updateScore = winner => {
    if (winner === 'human') {
        ++humanScore;
    } else {
        ++computerScore;
    }
}

// ****************************advance round function *************************888

const advanceRound = () => {
    ++currentRoundNumber
}

