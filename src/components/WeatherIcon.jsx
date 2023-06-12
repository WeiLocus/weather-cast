import { ReactComponent as Rain } from "../assets/climate-cloud-rain.svg"
import { ReactComponent as Strom } from "../assets/clouds-strom.svg"
import { ReactComponent as CloudDay } from "../assets/cloudy-sun.svg"
import { ReactComponent as ClimateRainDay } from "../assets/climate-forecast-rain-day.svg"
import { ReactComponent as Day } from "../assets/sun.svg"

import { ReactComponent as ClimateRainNight } from "../assets/climate-forecast-rain-night.svg"
import { ReactComponent as CloudNight } from "../assets/cloud-night.svg"
import { ReactComponent as Night } from "../assets/night.svg"






function WeatherIcon() {
  return (
    <div>
      {/* <Rain />
      <Strom /> */}
      <CloudDay />
      {/* <ClimateRainDay />
      <Day />
      <ClimateRainNight />
      <CloudNight />
      <Night /> */}

    </div>
  )
}

export default WeatherIcon