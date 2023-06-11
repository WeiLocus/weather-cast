import { weatherReducer } from "./slice/weatherSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
})