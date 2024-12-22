import React, { HtmlHTMLAttributes, useState } from "react";
import './styles.scss';
import WeatherCondition from "@components/molecules/weatherCondition/WeatherCondition";
import { TemperatureIndicatorMaxLarge, TemperatureIndicatorMinLarge } from "@components/molecules/temperatureIndicator";
import { Card } from "@components/atoms/card";
import { useMediaQueries } from "@hooks/useMediaQueries";
import clx from "classnames";
import { Location } from "@components/molecules/location";
import Button from "@components/molecules/refreshButton/Button";
import { Refresh15 } from "@components/atoms/icons/refresh";
import ReactSwitch from "react-switch";

interface IWeatherBanner extends HtmlHTMLAttributes<HTMLSpanElement> {
    appTempMax?:number
    appTempMin?:number
    description?:string
    weatherCode?:number
    countryCode: string
    cityName:string
    onRefreshForecast?: () => void
    lastUpdateTime?:string
    onChangeUnit?:(checked:boolean) => void
}

const WeatherBanner = ({appTempMax=0, appTempMin=0, weatherCode, cityName, countryCode, description, onChangeUnit, onRefreshForecast,
    lastUpdateTime}:IWeatherBanner) => {
    const {desktop, laptop} = useMediaQueries()
    
    const [isFahrenheit, setIsFahrenheit]= useState<boolean>(false)

    const handleSwitchUnit = (checked:boolean) => {
        setIsFahrenheit(checked)
        if(typeof onChangeUnit === "function")
            onChangeUnit(checked)
    }

    return <Card className="grid grid-sm-col--1 grid-lg-col--2 weather-banner">
            <div>
                <WeatherCondition size="large" code={weatherCode} />
                <Location city={cityName} country={countryCode} />
            </div>
            <div className={clx({["weather-banner-desc"]: desktop || laptop}, ["flex sm-center-items md-center-items"])}>
                <div className={clx({["flex-column"]:desktop || laptop}, ["flex weather-banner-desc-text"])}>
                    <TemperatureIndicatorMaxLarge temperature={appTempMax} />
                    <TemperatureIndicatorMinLarge temperature={appTempMin} />
                    <div className="weather-banner-desc-text-item">{description}</div>
                    <div className="flex weather-banner-desc-text-item">
                        <div>{(desktop || laptop )&& <span>
                                Last update time: 
                            </span>}
                            {lastUpdateTime} </div>
                        <Button icon={<Refresh15 />} onClick={onRefreshForecast} />
                    </div>
                    <div className="flex">
                        <span className="unit-switch-spacing">Display in {isFahrenheit? "Celsius" : "Fahrenheit"}</span>
                        <ReactSwitch onChange={handleSwitchUnit} checked={isFahrenheit} />
                    </div>
                </div>
            </div>
        </Card>
}

export default WeatherBanner;