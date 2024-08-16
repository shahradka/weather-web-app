import { Text } from "@components/atoms/text";
import React, { HtmlHTMLAttributes } from "react";
import "./styles.scss";
import {ChevronDown32, ChevronUp32, ChevronDown24, ChevronUp24} from "@components/atoms/icons/Chevron";

interface ITemperatureIndicator extends HtmlHTMLAttributes<HTMLDivElement> {
    temperature:number
    icon?: React.ReactNode
    iconClassName?: string
    textSize?: "large" | "normal"

}

const TemperatureIndicator = ({temperature, icon, iconClassName, textSize, ...restProps}:ITemperatureIndicator) => {

    return <div className="temperature-indicator" {...restProps}>
        <Text variant={textSize === "large"? "heading4" :"small" } color={textSize === "normal" ? "gray" : undefined}>
            {temperature?.toString()}
        </Text>
        <div className={iconClassName || ""}>
            {icon}
        </div>
    </div>

}

const TemperatureIndicatorMaxLarge = (props:ITemperatureIndicator) => <TemperatureIndicator {...props} textSize="large"  iconClassName="max-indicator" icon={<ChevronUp32 />} />;
const TemperatureIndicatorMinLarge = (props:ITemperatureIndicator) => <TemperatureIndicator {...props} textSize="large"  iconClassName="min-indicator" icon={<ChevronDown32 />} />;
const TemperatureIndicatorMaxSmall = (props:ITemperatureIndicator) => <TemperatureIndicator {...props} textSize="normal" iconClassName="max-indicator" icon={<ChevronUp24 />} />;
const TemperatureIndicatorMinSmall = (props:ITemperatureIndicator) => <TemperatureIndicator {...props} textSize="normal" iconClassName="min-indicator" icon={<ChevronDown24 />} />;

export {TemperatureIndicatorMaxLarge, TemperatureIndicatorMinLarge, TemperatureIndicatorMaxSmall, TemperatureIndicatorMinSmall}