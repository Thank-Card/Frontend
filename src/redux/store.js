import { configureStore, createSlice } from "@reduxjs/toolkit";
import defaultImg from "@img/RedSnow.png";

const imgSlice = createSlice({
    name: 'image',
    initialState: {defaultImg}.defaultImg,
    reducers: {
        changeURL(state, action){
            //console.log(action.payload);
            return action.payload;
        },
    },
});

const textSlice = createSlice({
    name: 'text',
    initialState: " ",
    reducers: {
        changeText(state, action){
            console.log(action.payload);
            return action.payload;
        },
    },
});

export const {changeURL} = imgSlice.actions;
export const {changeText} = textSlice.actions;

const store = configureStore({
    reducer:{
        image: imgSlice.reducer,
        text: textSlice.reducer,
    },
});

export default store;   