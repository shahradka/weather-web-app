import React, { HtmlHTMLAttributes } from "react";
import './styles.scss';
import { GeneralWeatherData } from "types/weather";
import { TemperatureIndicatorMaxSmall, TemperatureIndicatorMinSmall } from "@components/molecules/temperatureIndicator";
import WeatherCondition from "@components/molecules/weatherCondition/WeatherCondition";
import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/text";

const WeatherCard = ({appTempMax, appTempMin, weatherCode, dayOfWeek,...restProps}:
    HtmlHTMLAttributes<HTMLSpanElement> & GeneralWeatherData & {dayOfWeek?:string}) => {
    return <Card className="weather-card" {...restProps}>
        <WeatherCondition code={weatherCode} />
        <Text>{dayOfWeek}</Text>
        <TemperatureIndicatorMaxSmall temperature={appTempMax} />
        <TemperatureIndicatorMinSmall temperature={appTempMin} />
    </Card>
}

export default WeatherCard;