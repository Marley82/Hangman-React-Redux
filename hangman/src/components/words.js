import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import { fetchWord } from "../redux/gameSlice";

//fetching a random word from the api (not my first choice of api but unlimited calls to weird words!)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a37e00b62mshe11164381f41787p103505jsn8801d62f8506',
		'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
	}
};
const Answer = () => {
  const dispatch = useDispatch()
  const guessedLetter = useSelector(state => state.game.guessedLetter)
  const word = useSelector(state => state.game.answer)

  useEffect(()=>{
    fetch('https://random-word-api.p.rapidapi.com/get_word', options)
	  .then(answer => answer.json())
	  .then(answer => dispatch(fetchWord(answer)))
    .then(answer => console.log(answer))
	  .catch(err => console.error(err));
  },[dispatch]);

  return (
    <div id="answer">
      {word.split('').map((letter, i) => {
        return (
          <button id="letter" key={i}>
            {guessedLetter.includes(letter) ? letter : '_'}
          </button>
        )
      })}
    </div>
  )
}
export default Answer;
