import { Cloud128, Cloud32 } from "@components/atoms/icons/Cloud";
import { Rain128, Rain32 } from "@components/atoms/icons/Rain";
import { Snow128, Snow32 } from "@components/atoms/icons/Snow";
import { Sun128, Sun32 } from "@components/atoms/icons/Sun";
import React from "react";
import { HtmlHTMLAttributes } from "react";
import "./styles.scss";
import clx from "classnames";

/**
 * 
 * weather codes:
 * 0, 1, 2, 3 ----> clear 
 * 61, 63, 65, 66, 67, 80, 81, 82 ----> rainy 
 * 71, 73, 75, 77 ----> snow
 * 
 */

interface IWeatherCondition extends HtmlHTMLAttributes<HTMLDivElement> {
    code?: number,
    iconClassName?: string,
    size?: "large" | "small"
}

const WeatherCondition = ({size, code, ...restProps}:IWeatherCondition) => {
    switch(code){
        case 0:
        case 1:
        case 2:
        case 3:
            return size === "large"? <WeatherConditionSunnyLarge {...restProps} /> : <WeatherConditionSunnySmall {...restProps} />;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return size === "large"? <WeatherConditionRainyLarge {...restProps} /> : <WeatherConditionRainySmall {...restProps} />;
        case 71:
        case 73:
        case 75:
        case 77:
            return size === "large"? <WeatherConditionSnowyLarge {...restProps} /> : <WeatherConditionSnowySmall {...restProps} />;
        default:
            return size === "large"? <WeatherConditionCloudyLarge {...restProps} /> : <WeatherConditionCloudySmall {...restProps} />;
    }
}

const WeatherConditionComponent = ({children, iconClassName}:IWeatherCondition) => {

    
    return <div className={clx("weather-condition", iconClassName)}>
        {children}
    </div>
}

const WeatherConditionSunnyLarge = (props:IWeatherCondition) => <WeatherConditionComponent iconClassName="sunny-color" {...props}><Sun128 /></WeatherConditionComponent>;
const WeatherConditionSunnySmall = (props:IWeatherCondition) => <WeatherConditionComponent  iconClassName="sunny-color" {...props}><Sun32 /></WeatherConditionComponent>;
const WeatherConditionCloudyLarge = (props:IWeatherCondition) => <WeatherConditionComponent iconClassName="cloudy-color"   {...props}><Cloud128 /></WeatherConditionComponent>;
const WeatherConditionCloudySmall = (props:IWeatherCondition) => <WeatherConditionComponent iconClassName="cloudy-color"   {...props}><Cloud32/></WeatherConditionComponent>;
const WeatherConditionRainyLarge = (props:IWeatherCondition) => <WeatherConditionComponent  iconClassName="rainy-color" {...props}><Rain128 /></WeatherConditionComponent>;
const WeatherConditionRainySmall = (props:IWeatherCondition) => <WeatherConditionComponent  iconClassName="rainy-color" {...props}><Rain32 /></WeatherConditionComponent>;
const WeatherConditionSnowyLarge = (props:IWeatherCondition) => <WeatherConditionComponent  iconClassName="snowy-color" {...props}><Snow128 /></WeatherConditionComponent>;
const WeatherConditionSnowySmall = (props:IWeatherCondition) => <WeatherConditionComponent  iconClassName="snowy-color" {...props}><Snow32/></WeatherConditionComponent>;

export default WeatherCondition;
