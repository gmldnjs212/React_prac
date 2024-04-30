import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// slice
// -> name, initialState, reducers
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    sub: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
