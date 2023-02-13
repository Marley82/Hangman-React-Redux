import React from 'react';
import KeyBoard from './keyboard'
import Image from './image'
import Answer from './words';
import Wrong from './guessedwrong';
import GuessesLeft from './results';

//main page app holding components (what else to comment!?)

function Main() {
  return (
    <div className="App">
    <GuessesLeft/>
    <Wrong/>
    <Image/>
    <br></br>
    <Answer/>
    <br></br>
    <KeyBoard/>
    </div>
  );
}

export default Main;