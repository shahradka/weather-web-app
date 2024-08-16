export type FORECAST_REQUEST = {
    latitude:number
    longitude:number
}


export type FORECAST_DAILY_RESPONSE = {
    latitude: number,
    longitude: number
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    daily_units: {
        time: string,
        apparent_temperature_max: string
        apparent_temperature_min: string
    },
        daily: {
            time: Array<string>,
            apparent_temperature_max: Array<number>
            apparent_temperature_min: Array<number>
            weather_code:Array<number>
        }
}

export type GeneralWeatherData = {

    apparent_temperature_max: number
    apparent_temperature_min: number
    weather_code: number
        
}