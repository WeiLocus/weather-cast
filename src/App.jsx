import { GlobalStyle } from "../globalStyles"
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh, ThemeIcon } from "./styles/style"
import { ThemeProvider } from "styled-components"
import { lightTheme,darkTheme } from "../globalStyles"
import { BsFillCloudRainFill, BsWind} from "react-icons/bs"
import {CiLight, CiDark} from "react-icons/ci"
import { AiOutlineReload } from "react-icons/ai"
import { ReactComponent as Day} from "./assets/sun.svg"
import { useSelector } from "react-redux"
import { useState } from "react"
import dayJs from "dayjs"
import { useFetchWeatherQuery } from "./store"

const LOCATION = "臺中"
const AUTH_KEY = "CWB-FE3EAADB-ADEA-493D-BC79-CB0C1AEBD8FE"


function App() {

  const { data, error, isFetching} = useFetchWeatherQuery({AUTH_KEY,LOCATION})

  console.log("fetchWeather data:",data)

  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }
  const weatherData = useSelector((state) => state.weather.data)

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
