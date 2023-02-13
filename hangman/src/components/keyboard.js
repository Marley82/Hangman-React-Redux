import {useDispatch, useSelector } from 'react-redux';
import {guess} from '../redux/gameSlice';

// creating a keyboard on screen for style and ease, and to use map() as instructed in the task

const KeyBoard =(action) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const dispatch = useDispatch();
    const guessedLetter = useSelector(state => state.game.guessedLetter)

    const handleClick = (action) => {
        dispatch(guess(action.target.innerHTML))
    } 

    // return alphabet.split("").map((letter) => (
    //    <button
    //     key={letter}
    //     value={letter}
    //     onClick={handleClick}
    //     disabled={guessedLetter.includes(letter)}>
    //     {letter}
    //   </button>
    // )
    return (
      <div id="keyboard">
        {alphabet.split('').map((letter, i) => {
          return (
            <button
            key={letter}
            value={letter}
            onClick={handleClick}
            disabled={guessedLetter.includes(letter)}>
            {letter}
            </button>
          )
        })}
      </div>
    );
  }
  
  export default KeyBoard;