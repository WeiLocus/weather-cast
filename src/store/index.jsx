import { weatherReducer, setWeather } from "./slice/weatherSlice";
import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(weatherApi.middleware)
  }
})

setupListeners(store.dispatch)

export {useFetchWeatherQuery} from "./api/weatherApi"
export { setWeather } from "./slice/weatherSlice"