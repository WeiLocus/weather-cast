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
    isOpen: false,
    city: "臺北市",
    theme: "light",
  },
  reducers: {
    setWeather(state,action) {
      const newWeatherData = action.payload;
      state.data = newWeatherData;
    },
    setLocation(state,action) {
      state.city = action.payload
    },
    toggleTheme(state,action) {
    state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleSearch(state,action) {
      state.isOpen = !state.isOpen
    }
  }
})

export const { setWeather, setLocation, toggleTheme, toggleSearch } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer