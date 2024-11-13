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

export const  {changeURL} = imgSlice.actions;

const store = configureStore({
    reducer:{
        image: imgSlice.reducer,
    },
});

export default store;   