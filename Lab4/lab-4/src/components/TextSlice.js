import { createSlice } from "@reduxjs/toolkit";

export const TextSlice = createSlice({
  name: "currentText",
  initialState: {
    value: "",
  },
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = TextSlice.actions;
export const currentText = (state) => state.currentText.value;
export default TextSlice.reducer;
