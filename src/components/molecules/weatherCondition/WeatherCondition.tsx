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
 * 8XX ----> clear 
 * 5XX ----> rainy 
 * 6XX ----> snow
 * other cloudy
 * 
 */

interface IWeatherCondition extends HtmlHTMLAttributes<HTMLDivElement> {
    code?: number,
    iconClassName?: string,
    size?: "large" | "small"
}

const WeatherCondition = ({size, code, ...restProps}:IWeatherCondition) => {
    switch(code){
        case 800:
        case 801:
        case 802:
        case 803:
            return size === "large"? <WeatherConditionSunnyLarge {...restProps} /> : <WeatherConditionSunnySmall {...restProps} />;
        case 500:
        case 501:
        case 502:
        case 511:
        case 520:
        case 521:
        case 522:
            return size === "large"? <WeatherConditionRainyLarge {...restProps} /> : <WeatherConditionRainySmall {...restProps} />;
        case 600:
        case 601:
        case 602:
        case 610:
        case 611:
        case 612:  
        case 621:
        case 622:
        case 623:
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
