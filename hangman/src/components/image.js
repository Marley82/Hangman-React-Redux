import React from 'react'
import { useSelector } from 'react-redux'

// image that dynamically changes on screen
const Image = () => {
    const images = useSelector(state => state.game.images);
    const wrong = useSelector(state => state.game.guessesWrong);
    const win = useSelector(state => state.game.isWinner);
    const lose = useSelector(state => state.game.isLoser);
  if (win) {
    return (
      <>
      <img id="image" src={images[wrong]} alt="HangMan" />
      </>
    )
  }
  if(lose){
    return (
      <>
      <img id="image" src={images[wrong]} alt="HangMan" />
      </>
    )
  }
  else  
   return (
       <>
       <img id="image" src={images[wrong]} alt="HangMan" />
       </>
  )
}

export default Image