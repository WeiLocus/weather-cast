import { GlobalStyle } from "../globalStyles"
import { useFetchWeatherQuery, useForecastRainAndTypeQuery, setWeather, setLocation } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Card, SearchLocation, Input } from "./styles/style";
import { lightTheme,darkTheme } from "../globalStyles";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md"
import { getMoment, availableLocations, findLocation } from "./utils/helpers";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch()

  // get state data
  const{weatherData, selectCity}  = useSelector((state) => {
    console.log(state.weather)
    console.log(state.weather.city)
    return {
      weatherData: state.weather.data,
      selectCity: state.weather.city
    }
  })

  // get location name
  const currentLocation = useMemo(() => findLocation(selectCity),[selectCity])
  console.log("currentLocation",currentLocation)

  const { cityName, locationName, sunriseCityName} = currentLocation

  // fetch data
  const { data }  = useFetchWeatherQuery(locationName)
  const { data: forecastData} = useForecastRainAndTypeQuery(cityName)

  // change theme
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }

  const handleChangeLocation = (e) => {
    dispatch(setLocation(e.target.value))
  }

  // getMoment
  const moment = useMemo(() => getMoment(sunriseCityName),[sunriseCityName])

  const handleSearch = () => {

  }

  useEffect(() => {
    if (data && forecastData ) {
      dispatch(setWeather({...data, ...forecastData}))
    }
  },[dispatch, data, forecastData])

  return (
    <>
    <ThemeProvider theme={ theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
        <Container>
          <Card>
            <Search
              value={selectCity}
              onChange={handleChangeLocation}
              onClick={handleSearch}/>
            <WeatherCard 
              moment={moment}
              onChange={handleChangeLocation}
              weatherData={weatherData}
              cityName={cityName}
              theme={theme}
              changeTheme={changeTheme}/>           
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
