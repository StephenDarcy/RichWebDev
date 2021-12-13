import { createSlice } from "@reduxjs/toolkit";

export const ColourSlice = createSlice({
  name: "currentColour",
  initialState: {
    value: "white",
  },
  reducers: {
    setColour: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setColour } = ColourSlice.actions;
export const currentColour = (state) => state.currentColour.value;
export default ColourSlice.reducer;
