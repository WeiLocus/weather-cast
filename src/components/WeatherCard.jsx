import dayJs from "dayjs";
import WeatherIcon from "./WeatherIcon"
import { TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Time, ThemeIcon, CardContent } from "../styles/card";
import { BsFillCloudRainFill, BsWind} from "react-icons/bs";
import {CiLight, CiDark} from "react-icons/ci";
import { BiMessageAltError } from "react-icons/bi";


function WeatherCard({moment, weatherData, forecastData, theme, changeTheme, cityName, isFetching, isForecastDataFetching}) {
  return (
    <CardContent>
      <TopCard>
        <Location>
          {cityName}
        </Location>
        <Temperature>
          { weatherData.temperature < 0 ? <BiMessageAltError /> : Math.round(weatherData.temperature)
          }<Celsius>°C</Celsius>
        </Temperature>
      </TopCard>
      <BottomCard>
          <Description>
            {`${forecastData.comfortability} ,
            ${forecastData.weatherType}`}
          </Description>
          <AirFlow>
            <BsWind/>
            { weatherData.windSpeed < 0 ? <BiMessageAltError /> : `${weatherData.windSpeed }m/h`
            } 
          </AirFlow>
          <Rain>
            <BsFillCloudRainFill/>
            { forecastData.rainPossibility < 0 ? <BiMessageAltError /> : `${forecastData.rainPossibility} %`
            } 
          </Rain>
          <WeatherIcon weatherCode={forecastData.weatherCode} moment={moment}/>
        <Time>
          {new Intl.DateTimeFormat('zh-tw', {
            hour: 'numeric',
            minute: 'numeric'
          }).format(dayJs(weatherData.observationTime)) 
          }
        </Time>
      </BottomCard>
      <ThemeIcon onClick={changeTheme}>
        {theme === "light" && <CiLight/>}
        {theme === "dark" && <CiDark/> }
      </ThemeIcon>
    </CardContent>
  )
}

export default WeatherCard