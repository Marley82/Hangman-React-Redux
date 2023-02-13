import React from 'react'
import fireworks from '../images/fireworks.jpg'
import { useSelector} from 'react-redux'


const GuessesLeft = () => {
    const guessesLeft = useSelector(state => state.game.guessesLeft);
    const guessesWrong = useSelector(state => state.game.guessesWrong);
    const correct = useSelector(state => state.game.guessedRight.length);
    const guesses = useSelector(state => state.game.guessedLetter.length);

    let answer = useSelector(state => state.game.answer);
//pretty sure there's a better way of running this logic but it worked so I moved on and will come back
    let original = answer;
    answer = answer.split("");
    answer = new Set(answer);
    answer = [...answer].join("");
    let answerLen = answer.length;
//logic to check winners/losers and run results panel
    if(correct === answerLen && guessesWrong <= 9 && guesses >= 1){ 
      return (
        <div id="guesses">
        <h1 id="winner">You won!</h1>
        <img id="fireworks" src={fireworks} alt="fireworks" />
        </div>
      )
    }
    else if(guessesLeft < 1 && correct !== answerLen){
      return (
        <div id="guesses">
        <h1 id="alert">You lost this time!</h1>
        <p id="alert"><b>{original}</b> was the answer!</p>
        </div>
      )
    }
    else if(guessesLeft <= 0){
      return (
        <div id="guesses">
        <h1 id="alert">You lost this time!</h1>
        <p id="alert"><b>{original}</b> was the answer!</p>
        </div>
      )
    }
    else{
      return (
        <div id="guesses">
        <h1>{guessesLeft} chances left!</h1>
        <h3>He's counting on you!</h3>
        </div>
      )
    }
}
export default GuessesLeft