import { GlobalStyle } from "../globalStyles"
import { useFetchWeatherQuery, useForecastRainAndTypeQuery, setWeather, setLocation, toggleTheme, toggleSearch } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Card } from "./styles/style";
import { lightTheme,darkTheme } from "../globalStyles";
import { getMoment, findLocation } from "./utils/helpers";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch()

  // get state data
  const{weatherData, selectCity, theme, isOpen}  = useSelector((state) => {
    console.log(state.weather)
    console.log(state.weather.city)
    return {
      weatherData: state.weather.data,
      selectCity: state.weather.city,
      theme: state.weather.theme,
      isOpen: state.weather.isOpen
    }
  })

  // get location name
  const currentLocation = useMemo(() => findLocation(selectCity),[selectCity])

  const { cityName, locationName, sunriseCityName} = currentLocation

  // fetch data
  const { data, isFetching }  = useFetchWeatherQuery(locationName)
  const { data: forecastData, isFetching: isForecastDataFetching} = useForecastRainAndTypeQuery(cityName)

  // set theme
  const currentTheme = theme === "light" ? darkTheme : lightTheme

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  // change location
  const handleChangeLocation = (e) => {
    dispatch(setLocation(e.target.value))
    dispatch(toggleSearch())
  }

  // getMoment
  const moment = useMemo(() => getMoment(sunriseCityName),[sunriseCityName])

  const handleSearch = () => {
    dispatch(toggleSearch())
  }

  useEffect(() => {
    if (data && forecastData ) {
      dispatch(setWeather({...data, ...forecastData}))
    }
  },[dispatch, data, forecastData])

  return (
    <>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
        <Container>
          <Card>
            <Search
              value={selectCity}
              onChange={handleChangeLocation}
              onClick={handleSearch}
              isOpen={isOpen}
              isFetching={isFetching}
              isForecastDataFetching={isForecastDataFetching}/>
            <WeatherCard 
              moment={moment}
              onChange={handleChangeLocation}
              weatherData={weatherData}
              cityName={cityName}
              theme={theme}
              changeTheme={changeTheme}
              isFetching={isFetching}
              isForecastDataFetching={isForecastDataFetching}/>    
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
