import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: {
      windSpeed: 0,
      rainPossibility: 0,
      weatherCode: 0,
      comfortability: "",
    },
  }
})

export const forecastReducer = forecastSlice.reducer