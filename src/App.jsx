import { GlobalStyle } from "../globalStyles"
import { useFetchWeatherQuery, useForecastRainAndTypeQuery, setLocation, toggleTheme, toggleSearch } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Card } from "./styles/style";
import { lightTheme,darkTheme } from "../globalStyles";
import { getMoment, findLocation } from "./utils/helpers";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import {BarLoader} from "react-spinners";
import { BiMessageAltError } from "react-icons/bi";
import ThemeContainer from "./components/ThemeContainer"

function App() {
  const dispatch = useDispatch()

  // get state data
  const{selectCity, theme, isOpen}  = useSelector((state) => {
    console.log(state.weather.city)
    return {
      selectCity: state.weather.city,
      theme: state.weather.theme,
      isOpen: state.weather.isOpen
    }
  })

  // get location name
  const currentLocation = useMemo(() => findLocation(selectCity),[selectCity])

  const { cityName, locationName, sunriseCityName} = currentLocation

  // fetch data
  const { data, isFetching, isError }  = useFetchWeatherQuery(locationName)
  const { data: forecastData, isFetching: isForecastDataFetching, isError: isForecastDataError} = useForecastRainAndTypeQuery(cityName)
  console.log("weather data:", data)
  console.log("forecast data:", forecastData)

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

  if (isFetching || isForecastDataFetching) {
    return  (
      <ThemeContainer currentTheme={currentTheme}>
        <BarLoader color="#149ECA" height={10}/>
      </ThemeContainer>
    )
  } else if (isError || isForecastDataError) {
    return  (
      <ThemeContainer currentTheme={currentTheme}>
        <BiMessageAltError />
      </ThemeContainer>
    )
  } else {
    return (
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
                weatherData={data}
                forecastData={forecastData}
                cityName={cityName}
                theme={theme}
                changeTheme={changeTheme}
                isFetching={isFetching}
                isForecastDataFetching={isForecastDataFetching}/>    
            </Card>
          </Container>
        </ThemeProvider>
      )
    }
  }

export default App
