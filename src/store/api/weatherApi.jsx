import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { weatherReducer, setWeather } from "../index"

const AUTH_KEY = "CWB-FE3EAADB-ADEA-493D-BC79-CB0C1AEBD8FE"
// const LOCATION = "臺北"
const URL = `https://opendata.cwb.gov.tw/`

// const URL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTH_KEY}&locationName=${LOCATION}`


const weatherApi = createApi({
  reducerPath: weatherReducer.name,
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints(builder) {
    return {
      fetchWeather: builder.query({
        query: (location) => {
          return {
            url: `api/v1/rest/datastore/O-A0003-001?Authorization=${AUTH_KEY}&locationName=${location}`,
          }
        },
        // transformResponse: (response, meta, arg) => {
        //   console.log("response",response)
        //   console.log("meta:", meta)
        //   console.log("arg:", arg)
        // }
      }),
      forecastRainAndType: builder.query({
        query: ( location) => {
          return {
            url: `api/v1/rest/datastore/F-C0032-001?Authorization=${AUTH_KEY}&locationName=${location}`
          }
        },
        transformResponse: (response, meta, arg) => {
          const locationData = response.records.location[0]
          const weatherElements = locationData.weatherElement.reduce((neededElements, item) => {
          if (["Wx", "PoP", "CI"].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter
          }
          return neededElements
          },{})
          const currentForecast = {
            weatherType: weatherElements.Wx.parameterName,
            weatherCode: weatherElements.Wx.parameterValue,
            rainPossibility: weatherElements.PoP.parameterName,
            comfortability: weatherElements.CI.parameterName,
          }
          return currentForecast
        },
      })
    }
  }
})



export const { useFetchWeatherQuery, useForecastRainAndTypeQuery } = weatherApi
export { weatherApi }