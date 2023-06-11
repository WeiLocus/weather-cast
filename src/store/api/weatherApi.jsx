import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { weatherReducer } from '../slice/weatherSlice'

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
        query: (data) => {
          return {
            url: `api/v1/rest/datastore/O-A0003-001?Authorization=${AUTH_KEY}&locationName=${data}`,
          }
        },
        // transformResponse: (response, meta, arg) => {
        //   console.log("response",response)
        //   console.log("meta:", meta)
        //   console.log("arg:", arg)
        // }
      })
    }
  }
})



export const { useFetchWeatherQuery } = weatherApi
export { weatherApi }