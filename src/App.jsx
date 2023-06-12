import { GlobalStyle } from "../globalStyles"
import { useFetchWeatherQuery, useForecastRainAndTypeQuery, setWeather, setLocation } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo, useRef } from "react";
import dayJs from "dayjs";
import { ThemeProvider } from "styled-components";
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh, ThemeIcon, CardContent, SearchLocation, Input } from "./styles/style";
import { lightTheme,darkTheme } from "../globalStyles";
import { BsFillCloudRainFill, BsWind} from "react-icons/bs";
import {CiLight, CiDark} from "react-icons/ci";
import { AiOutlineReload } from "react-icons/ai";
import { BiMessageAltError, BiSearchAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md"
import WeatherIcon from "./components/WeatherIcon";
import { getMoment, availableLocations } from "./utils/helpers";

const LOCATION = "臺北"
const LOCATION_NAME = "臺北市"

function App() {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  // fetch data
  const { data }  = useFetchWeatherQuery(LOCATION)
  const { data: forecastData} = useForecastRainAndTypeQuery(LOCATION_NAME)

  // change theme
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }
  // getMoment
  const moment = useMemo(() => getMoment(LOCATION_NAME),[])

  // get state data
  const{weatherData,selectCity}  = useSelector((state) => {
    console.log(state.weather)
    return {
      weatherData: state.weather.data,
      selectCity: state.city
    }
  })

  const handleChangeLocation = (e) => {
    dispatch(setLocation(e.target.value))
  }

  const handleSearch = () => {
    console.log("ref:",inputRef.current.value)
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
            <SearchLocation>
              <MdLocationOn className="location"/>
              <Input 
                type="select"
                placeholder="Enter your location"
                defaultValue="臺中市"
                value={selectCity}
                ref={inputRef}
                onChange={handleChangeLocation}>
                {availableLocations.map(({ cityName }) => (
                  <option className="location-name" value={cityName} key={cityName}>
                    {cityName}
                  </option>
                ))}
              </Input>
              <BiSearchAlt className="search" onClick={handleSearch}/>
            </SearchLocation>
            <CardContent>
              <TopCard>
                <Location>
                  {weatherData.locationName}
                </Location>
                <Temperature>
                  { weatherData.temperature < 0 ? <BiMessageAltError /> : Math.round(weatherData.temperature)
                  }<Celsius>°C</Celsius>
                </Temperature>
              </TopCard>
              <BottomCard>
                  <Description>
                    {weatherData.comfortability} ,
                    {weatherData.weatherType}
                  </Description>
                  <AirFlow>
                    <BsWind/>
                    { weatherData.windSpeed < 0 ? <BiMessageAltError /> : `${weatherData.windSpeed }m/h`
                    } 
                  </AirFlow>
                  <Rain>
                    <BsFillCloudRainFill/>
                    { weatherData.rainPossibility < 0 ? <BiMessageAltError /> : `${weatherData.rainPossibility} %`
                    } 
                  </Rain>
                  <WeatherIcon weatherCode={weatherData.weatherCode} moment={moment}/>
                <Refresh>
                  {new Intl.DateTimeFormat('zh-tw', {
                    hour: 'numeric',
                    minute: 'numeric'
                  }).format(dayJs(weatherData.observationTime)) 
                  } <AiOutlineReload />
                </Refresh>
              </BottomCard>
              <ThemeIcon onClick={changeTheme}>
                {theme === "light" && <CiLight/>}
                {theme === "dark" && <CiDark/> }
              </ThemeIcon>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
