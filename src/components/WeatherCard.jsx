import dayJs from "dayjs";
import WeatherIcon from "./WeatherIcon"
import { TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh, ThemeIcon, CardContent } from "../styles/style";
import { BsFillCloudRainFill, BsWind} from "react-icons/bs";
import {CiLight, CiDark} from "react-icons/ci";
import { AiOutlineReload } from "react-icons/ai";
import { BiMessageAltError } from "react-icons/bi";


function WeatherCard({moment, weatherData, theme, changeTheme}) {
  return (

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
  )
}

export default WeatherCard