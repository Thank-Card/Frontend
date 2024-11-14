import { configureStore, createSlice } from "@reduxjs/toolkit";
import defaultImg from "@img/RedSnow.png";

const imgSlice = createSlice({
  name: "image",
  initialState: { defaultImg }.defaultImg,
  reducers: {
    changeURL(state, action) {
      //console.log(action.payload);
      return action.payload;
    },
  },
});

const textSlice = createSlice({
  name: "text",
  initialState: " ",
  reducers: {
    changeText(state, action) {
      //   console.log(action.payload);
      return action.payload;
    },
  },
});

const nickSlice = createSlice({
  name: "sendUser",
  initialState: "",
  reducers: {
    changeNick(state, action) {
      //console.log(action.payload);
      return action.payload;
    },
  },
});

const dateSlice = createSlice({
  name: "sendDate",
  initialState: "Unknown",
  reducers: {
    changeDate(state, action) {
      //console.log(action.payload);
      return action.payload;
    },
  },
});

const recvSlice = createSlice({
  name: "recvUser",
  initialState: "You",
  reducers: {
    changeRecv(state, action) {
      //console.log(action.payload);
      return action.payload;
    },
  },
});

export const { changeURL } = imgSlice.actions;
export const { changeText } = textSlice.actions;
export const { changeNick } = nickSlice.actions;
export const { changeDate } = dateSlice.actions;
export const { changeRecv } = recvSlice.actions;

const store = configureStore({
  reducer: {
    image: imgSlice.reducer,
    text: textSlice.reducer,
    sendUser: nickSlice.reducer,
    date: dateSlice.reducer,
    recvUser: recvSlice.reducer,
  },
});

export default store;
