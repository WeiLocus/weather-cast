import styled from "styled-components"
import { ReactComponent as Rain } from "../assets/climate-cloud-rain.svg"
import { ReactComponent as Strom } from "../assets/clouds-strom.svg"
import { ReactComponent as CloudDay } from "../assets/cloudy-sun.svg"
import { ReactComponent as ClimateRainDay } from "../assets/climate-forecast-rain-day.svg"
import { ReactComponent as Day } from "../assets/sun.svg"

import { ReactComponent as ClimateRainNight } from "../assets/climate-forecast-rain-night.svg"
import { ReactComponent as CloudNight } from "../assets/cloud-night.svg"
import { ReactComponent as Night } from "../assets/night.svg"

const IconContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 3rem;
`

function WeatherIcon() {
  return (
    <IconContainer>
      <CloudDay />
    </IconContainer>
  )
}

export default WeatherIcon