import { GlobalStyle } from "../globalStyles"
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh, ThemeIcon } from "./styles/style"
import { ThemeProvider } from "styled-components"
import { lightTheme,darkTheme } from "../globalStyles"
import { BsFillCloudRainFill, BsWind} from "react-icons/bs"
import {CiLight, CiDark} from "react-icons/ci"
import { AiOutlineReload } from "react-icons/ai"
import { ReactComponent as Day} from "./assets/sun.svg"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import dayJs from "dayjs"
import { useFetchWeatherQuery, useForecastRainAndTypeQuery, setWeather } from "./store"
import { useDispatch } from "react-redux"

const LOCATION = "臺南"
const LOCATION_NAME = "臺南市 "

function App() {
  const dispatch = useDispatch()

  //data, error, isSuccess
  const { data }  = useFetchWeatherQuery(LOCATION)

  const { data: forecastData} = useForecastRainAndTypeQuery(LOCATION_NAME)
  // console.log("fetchWeather data:", data)
  // console.log("forecastData",forecastData)


  useEffect(() => {
    data && dispatch(setWeather({...data, ...forecastData}))
  },[dispatch,data, forecastData])
  

  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }
  const weatherData = useSelector((state) => {
    return state.weather.data
  })

  return (
    <>
    <ThemeProvider theme={ theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
        <Container>
          <Card>
            <TopCard>
              <Location>
                {weatherData.locationName}
              </Location>
              <Temperature>
                {Math.round(weatherData.temperature)}<Celsius>°C</Celsius>
              </Temperature>
            </TopCard>
            <BottomCard>
                <Description>
                  {weatherData.comfortability} ,
                  {weatherData.weatherType}
                </Description>
                <AirFlow>
                  <BsWind/>{weatherData.windSpeed}m/h
                </AirFlow>
                <Rain>
                  <BsFillCloudRainFill/>{weatherData.rainPossibility}%
                </Rain>
                <Day className="day-icon"/>
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
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
