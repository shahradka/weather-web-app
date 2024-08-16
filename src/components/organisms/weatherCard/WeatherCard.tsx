import React, { HtmlHTMLAttributes } from "react";
import './styles.scss';
import { GeneralWeatherData } from "types/weather";
import { TemperatureIndicatorMaxSmall, TemperatureIndicatorMinSmall } from "@components/molecules/temperatureIndicator";
import WeatherCondition from "@components/molecules/weatherCondition/WeatherCondition";
import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/text";

const WeatherCard = ({apparent_temperature_max, apparent_temperature_min, weather_code, dayOfWeek,...restProps}:
    HtmlHTMLAttributes<HTMLSpanElement> & GeneralWeatherData & {dayOfWeek?:string}) => {
    return <Card className="weather-card" {...restProps}>
        <WeatherCondition code={weather_code} />
        <Text>{dayOfWeek}</Text>
        <TemperatureIndicatorMaxSmall temperature={apparent_temperature_max} />
        <TemperatureIndicatorMinSmall temperature={apparent_temperature_min} />
    </Card>
}

export default WeatherCard;