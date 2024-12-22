
export type FORECAST_DAILY_REQUEST = {
    lat: number,
    lon: number,
    key: string,
    unit?: "M" | "I"
}


export type FORECAST_DAILY_RESPONSE = {
  city_name: string,
  country_code: string,
  data: FORECAST_EACH_DAY_RESPONSE[]
}


export type FORECAST_EACH_DAY_RESPONSE = {
    app_max_temp: number,
    app_min_temp: number,
    clouds: number,
    clouds_hi: number,
    clouds_low: number,
    clouds_mid: number,
    datetime: Date,
    dewpt: number,
    high_temp: number,
    low_temp: number,
    max_dhi: number,
    max_temp: number,
    min_temp: number,
    moon_phase: number,
    moon_phase_lunation: number,
    moonrise_ts: number,
    moonset_ts: number,
    ozone: number,
    pop: number,
    precip: number,
    pres: number,
    rh: number,
    slp: number,
    snow: number,
    snow_depth: number,
    sunrise_ts: number,
    sunset_ts: number,
    temp: number,
    ts: number,
    uv: number,
    valid_date: Date,
    vis: number,
    weather: {
        description:string ,
        code: number,
        icon: string
    },
    wind_cdir: string,
    wind_cdir_full: string,
    wind_dir: number,
    wind_gust_spd: number,
    wind_spd: number
}


export type GeneralWeatherData = {

    appTempMax: number
    appTempMin: number
    weatherCode: number
        
}