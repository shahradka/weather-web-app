import { WeatherBanner } from "@components/organisms/weatherBanner";
import type { GeneralWeatherData } from "../../../types/weather";
import React from "react";
import { WeatherCard } from "@components/organisms/weatherCard";
import "./styles.scss";

export interface IForecast {
    currentWeatherData:GeneralWeatherData & {latitude?: number; longitude?:number}
    forecastWeatherData:Array<GeneralWeatherData & {dayOfWeek:string}>
}

const Forecast = ({currentWeatherData, forecastWeatherData}:IForecast) => {


    return <div className="forecast">
        <WeatherBanner {...currentWeatherData} />
        <div className="grid grid-sm-col--2 grid-md-col--3 grid-lg-col--4 grid-xl-col--6 forecast-cards">
            {forecastWeatherData?.map((item,index) => 
                <WeatherCard key={index} {...item} />
            )}
        </div>
    </div>

}

export default Forecast;