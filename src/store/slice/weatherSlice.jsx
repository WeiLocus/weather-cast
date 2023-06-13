import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {
      observationTime: new Date().toISOString(),
    },
    isOpen: false,
    city: "臺北市",
    theme: "light",
  },
  reducers: {
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

export const { setLocation, toggleTheme, toggleSearch } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer