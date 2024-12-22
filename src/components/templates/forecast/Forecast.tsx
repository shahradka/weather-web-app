import { WeatherBanner } from "@components/organisms/weatherBanner";
import type { GeneralWeatherData } from "../../../types/weather";
import React from "react";
import { WeatherCard } from "@components/organisms/weatherCard";
import "./styles.scss";

export interface IForecast {
    currentWeatherData:GeneralWeatherData & {description?:string, countryCode: string, cityName:string}
    forecastWeatherData:Array<GeneralWeatherData & {dayOfWeek:string}>
    onRefreshForecast?: () => void
    lastUpdateTime?: string
    onChangeUnit?:(checked:boolean) => void
}

const Forecast = ({currentWeatherData, forecastWeatherData, onRefreshForecast, onChangeUnit, lastUpdateTime}:IForecast) => {


    return <div className="forecast">
        <WeatherBanner  
        onChangeUnit={onChangeUnit} onRefreshForecast={onRefreshForecast} lastUpdateTime={lastUpdateTime} {...currentWeatherData} />
        <div className="grid grid-sm-col--2 grid-md-col--3 grid-lg-col--4 grid-xl-col--6 forecast-cards">
            {forecastWeatherData?.map((item,index) => 
                <WeatherCard key={index} {...item} />
            )}
        </div>
    </div>

}

export default Forecast;