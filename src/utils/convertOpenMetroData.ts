import { IForecast } from "@components/templates/forecast/Forecast";
import type { FORECAST_DAILY_RESPONSE } from "types/weather";

const WEEK_DAY_NAME = [
    "SUN",
    "MON",
    "TUE",
    "WEN",
    "THU",
    "FRI",
    "SAT"
]

export const convertOpenMetroData = (resp?: FORECAST_DAILY_RESPONSE):IForecast => {
    if(!resp)
        return {} as IForecast;

    const dehydrateDaily = {currentWeatherData:convertToCurrentWeather(resp), forecastWeatherData:[]} as IForecast;

    resp.daily.time.forEach((time, index) => {
        if(index >= 1)
            {
                dehydrateDaily.forecastWeatherData.push({
                    apparent_temperature_max: resp.daily.apparent_temperature_max[index],
                    apparent_temperature_min: resp.daily.apparent_temperature_min[index],
                    dayOfWeek: WEEK_DAY_NAME[new Date(time).getDay()],
                    weather_code: resp.daily.weather_code[index]
                })
            }
    })    

    return dehydrateDaily;

}

export const convertToCurrentWeather = (resp?: FORECAST_DAILY_RESPONSE) => {
    if(!resp)
        return {} as IForecast["currentWeatherData"];

    return {
        apparent_temperature_max: resp.daily.apparent_temperature_max[0] || 0,
        apparent_temperature_min: resp.daily.apparent_temperature_min[0] || 0,
        weather_code: resp.daily.weather_code[0] || 0,
        latitude: resp.latitude,
        longitude: resp.longitude
    } as IForecast["currentWeatherData"]
}

