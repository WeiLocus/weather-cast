import { weatherReducer } from "./slice/weatherSlice";
import { forecastReducer } from "./slice/forecastSlice";
import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api/weatherApi";
import { forecastApi } from "./api/forecastApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [forecastApi.reducerPath]: forecastApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(forecastApi.middleware)
  }
})

setupListeners(store.dispatch)

export {useFetchWeatherQuery} from "./api/weatherApi"
export { useForecastRainAndTypeQuery} from "./api/forecastApi"
export { weatherReducer ,setWeather, setLocation, toggleTheme, toggleSearch } from "./slice/weatherSlice"
export { forecastReducer } from "./slice/forecastSlice";