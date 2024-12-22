import { IForecast } from "@components/templates/forecast/Forecast";
import type { FORECAST_DAILY_RESPONSE, FORECAST_EACH_DAY_RESPONSE } from "types/weather";
import { celsiusToFahrenheit } from "./convertTempUnits";

const WEEK_DAY_NAME = [
    "SUN",
    "MON",
    "TUE",
    "WEN",
    "THU",
    "FRI",
    "SAT"
]


/**
 * 
 * @param resp type FORECAST_DAILY_RESPONSE
 * @param unit type M stands for Celsius unit and I stands for Fahrenheit unit
 * @returns 
 */
export const convertWeatherData = (resp?: FORECAST_DAILY_RESPONSE, unit?:"M" | "I"):IForecast => {
    if(!resp || !resp.data)
        return {} as IForecast;

    const data = resp.data
    
    const currentDay = data[0]

    const dehydrateDaily = {currentWeatherData:convertToCurrentWeather(currentDay, resp.city_name, resp.country_code, unit), forecastWeatherData:[]} as IForecast;

    data?.slice(1, data.length).forEach(day => {
                dehydrateDaily.forecastWeatherData.push({
                    appTempMax: unit === "I" ? celsiusToFahrenheit(day.app_max_temp) : day.app_max_temp,
                    appTempMin: unit === "I"? celsiusToFahrenheit(day.app_min_temp) : day.app_min_temp,
                    dayOfWeek: WEEK_DAY_NAME[new Date(day.datetime).getDay()],
                    weatherCode: day.weather.code
                })
    })    

    return dehydrateDaily;

}

/*
 * @param currentDay type FORECAST_EACH_DAY_RESPONSE
 * @param cityName type string
 * @param countryCode type string
 * @returns type IForecast["currentWeatherData"] or {}
 */
export const convertToCurrentWeather = (currentDay?: FORECAST_EACH_DAY_RESPONSE, cityName?:string, countryCode?:string, unit?:"M" | "I") => {
    if(!currentDay)
        return {} as IForecast["currentWeatherData"];

    return {
        appTempMax: unit === "I" ? celsiusToFahrenheit(currentDay.app_max_temp) : currentDay.app_max_temp || 0,
        appTempMin: unit === "I" ? celsiusToFahrenheit(currentDay.app_min_temp) : currentDay.app_min_temp || 0,
        weatherCode: currentDay.weather.code || 0,
        cityName: cityName,
        countryCode: countryCode,
        description: currentDay.weather.description
    } as IForecast["currentWeatherData"]
}

