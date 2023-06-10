import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {
      locationName: '臺中市',
      weatherType: '多雲時晴',
      windSpeed: 10,
      temperature: 30,
      rainPossibility: 66,
      observationTime: '2023-06-10 11:00:00'
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