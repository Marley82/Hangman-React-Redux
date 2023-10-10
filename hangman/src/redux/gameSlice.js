import { createSlice } from "@reduxjs/toolkit";
import image0 from "../images/state1.GIF";
import image1 from "../images/state2.GIF";
import image2 from "../images/state3.GIF";
import image3 from "../images/state4.GIF";
import image4 from "../images/state5.GIF";
import image5 from "../images/state6.GIF";
import image6 from "../images/state7.GIF";
import image7 from "../images/state8.GIF";
import image8 from "../images/state9.GIF";
import image9 from "../images/state10.GIF";
import image10 from "../images/state11.GIF";
import image11 from "../images/state11.GIF";
import image12 from "../images/state11.GIF";
import image13 from "../images/state11.GIF";
import image14 from "../images/state11.GIF";
import image15 from "../images/state11.GIF";
import image16 from "../images/state11.GIF";
import image17 from "../images/state11.GIF";
import image18 from "../images/state11.GIF";
import image19 from "../images/state11.GIF";
import image20 from "../images/state11.GIF";
import image21 from "../images/state11.GIF";
import image22 from "../images/state11.GIF";
import image23 from "../images/state11.GIF";
import image24 from "../images/state11.GIF";
import image25 from "../images/state11.GIF";
import image26 from "../images/state11.GIF";

//imports, initail state and the reducers/exports

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        guessedLetter:[],
        guessedRight:[],
        guessedWrong:[],
        guessesRight:0,
        guessesWrong:0,
        guessesLeft:10,
        answer:"",
        images: [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26]
    },
    reducers: {
        guess: (state, action) => {
            state.guessedLetter.push(action.payload);
            if (state.answer.includes(action.payload)) {
                state.guessedRight.push(action.payload);
                state.guessesRight ++;
            }
            else{
                state.guessedWrong.push(action.payload);
                state.guessesWrong ++;
                state.guessesLeft -= 1;
            }
        },
        fetchWord: (state, action) =>{
            state.answer = action.payload.word;
        },
},
});
export const { guess , fetchWord} = gameSlice.actions;
export default gameSlice.reducer;