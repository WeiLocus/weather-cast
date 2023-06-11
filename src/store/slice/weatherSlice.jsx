import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {
      locationName: '',
      weatherType: '',
      windSpeed: 0,
      temperature: 0,
      rainPossibility: 0,
      observationTime: new Date().toISOString(),
      weatherCode: 0,
      comfortability: "",
    },
    isLoading: false
  },
  reducers: {
    setWeather(state,action) {
      const newWeatherData = action.payload;
      state.data = newWeatherData;
    }
  }
})

export const { setWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer