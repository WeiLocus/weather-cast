import styled from "styled-components"
import { ReactComponent as Storm } from "../assets/clouds-strom.svg"
import { ReactComponent as DayCloud } from "../assets/cloudy-sun.svg"
import { ReactComponent as ClimateRainDay } from "../assets/climate-forecast-rain-day.svg"
import { ReactComponent as Day } from "../assets/sun.svg"
import { ReactComponent as DayFog } from "../assets/day-foggy.svg"
import { ReactComponent as DayCloudSnow } from "../assets/sunny-cloud-snow.svg"

import { ReactComponent as ClimateRainNight } from "../assets/climate-forecast-rain-night.svg"
import { ReactComponent as NightCloud } from "../assets/cloud-night.svg"
import { ReactComponent as Night } from "../assets/night.svg"
import { ReactComponent as NightFog } from "../assets/night-foggy.svg"
import { ReactComponent as NightCloudSnow } from "../assets/cloud-night-snow.svg"

// weather type : weather code 
const weatherTypes = {
  isClear: [1],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isCloudyFog: [25, 26, 27, 28],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12,
    13, 14, 19, 20, 29, 30,
    31, 32, 38, 39,
  ],
  isStorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isSnowing: [23, 37, 42],
}

const weatherIcons = {
  day: {
    isClear: <Day/>,
    isCloudy: <DayCloud/>,
    isPartiallyClearWithRain: <ClimateRainDay/>,
    isFog: <DayFog />,
    isStorm: <Storm/>,
    isSnowing: <DayCloudSnow/>
  },
  night: {
    isClear: <Night/>,
    isCloudy: <NightCloud/>,
    isPartiallyClearWithRain: <ClimateRainNight/>,
    isFog: <NightFog />,
    isStorm: <Storm/>,
    isSnowing: <NightCloudSnow/>
  }
}

const codeToType = (weatherCode) => {
  // 將 weatherTypes 物件轉換為一個包含鍵值對陣列的新陣列
  console.log(Object.entries(weatherTypes));
  const [weatherType] = Object.entries(weatherTypes).find(([type, code]) =>
    code.includes(Number(weatherCode))) || [];

  return weatherType;
}

const IconContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 3rem;
`

function WeatherIcon({weatherCode, moment}) {
  const weatherType = codeToType(weatherCode)
  const weatherIcon = weatherIcons[moment][weatherType]

  return (
    <IconContainer>
      {weatherIcon}
    </IconContainer>
  )
}

export default WeatherIcon