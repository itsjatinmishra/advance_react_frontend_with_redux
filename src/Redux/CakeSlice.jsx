import { createSlice } from "@reduxjs/toolkit";

//This is the initial State: starting stock
const initialState = {
  numOfCakes: 10,
};

// This is Reducer : Where defines the factory rules
const cakeSlice = createSlice({
  name: "cake",
  //this is state
  initialState,
  reducers: {
    //this is action: here you write as much action you want
    buyCake: (state) => {
      if (state.numOfCakes > 0) {
        state.numOfCakes--;
      }
    },
  },
});

export const { buyCake } = cakeSlice.actions;
export default cakeSlice.reducer;
