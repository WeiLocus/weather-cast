import styled from "styled-components"
import { ReactComponent as Strom } from "../assets/clouds-strom.svg"
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
    isStrom: <Strom/>,
    isSnowing: <DayCloudSnow/>
  },
  night: {
    isClear: <Night/>,
    isCloudy: <NightCloud/>,
    isPartiallyClearWithRain: <ClimateRainNight/>,
    isFog: <NightFog />,
    isStrom: <Strom/>,
    isSnowing: <NightCloudSnow/>
  }
}

const IconContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 3rem;
`

function WeatherIcon() {
  return (
    <IconContainer>
      <NightCloudSnow />
    </IconContainer>
  )
}

export default WeatherIcon