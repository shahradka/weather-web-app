import React, { HtmlHTMLAttributes } from "react";
import './styles.scss';
import WeatherCondition from "@components/molecules/weatherCondition/WeatherCondition";
import { TemperatureIndicatorMaxLarge, TemperatureIndicatorMinLarge } from "@components/molecules/temperatureIndicator";
import { Card } from "@components/atoms/card";
import { useMediaQueries } from "@hooks/useMediaQueries";
import clx from "classnames";
import { Location } from "@components/molecules/location";

interface IWeatherBanner extends HtmlHTMLAttributes<HTMLSpanElement> {
    apparent_temperature_max?:number
    apparent_temperature_min?:number
    weather_code?:number
    latitude?: number
    longitude?:number
    
}

const WeatherBanner = ({apparent_temperature_max=0, apparent_temperature_min=0, weather_code, latitude=0, longitude=0}:IWeatherBanner) => {
    const {mobile, tablet} = useMediaQueries()
    return <Card className="grid grid-sm-col--1 grid-lg-col--2 weather-banner">
            <div>
                <WeatherCondition size="large" code={weather_code} />
                <Location lat={latitude} long={longitude} />
            </div>
            <div className={clx({["flex"]:mobile || tablet}, ["sm-center-items md-center-items"])}>
                <TemperatureIndicatorMaxLarge temperature={apparent_temperature_max} />
                <TemperatureIndicatorMinLarge temperature={apparent_temperature_min} />
            </div>
        </Card>
}

export default WeatherBanner;