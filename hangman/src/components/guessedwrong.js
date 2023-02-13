import React from 'react'
import { useSelector } from 'react-redux'

//creating a dynamic pop up for the right of the screen to show incorrect guesses
const Wrong = () => {
    const wrongGuesses = useSelector(state => state.game.guessedWrong)

  return (
    <div id="wrong">
   {wrongGuesses.map((letter) => {
    return <button id="wrongBut" key={letter}>{letter}</button>})}
   </div>
  )
}

export default Wrong