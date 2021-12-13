import { configureStore } from "@reduxjs/toolkit";
import ColourReducer from "./components/ColourSlice";
import TextReducer from "./components/TextSlice";

export default configureStore({
  reducer: {
    currentColour: ColourReducer,
    currentText: TextReducer,
  },
});
