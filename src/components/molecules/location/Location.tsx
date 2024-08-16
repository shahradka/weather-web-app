import { Pin24 } from "@components/atoms/icons/Pin";
import { Text } from "@components/atoms/text";
import React from "react";
import { HtmlHTMLAttributes } from "react";
import "./styles.scss";

interface ILocation extends HtmlHTMLAttributes<HTMLDivElement>{
    lat:number
    long:number
}

const Location = ({lat, long}:ILocation) => {

    return <div className="location">

        <Pin24 />
        <Text variant="small" color="gray" className="location-label">
            Lat:
        </Text>
        <Text>
            {lat?.toString()}
        </Text>
        <Text variant="small" color="gray" className="location-label">
            Long:
        </Text>
        <Text>
            {long?.toString()}
        </Text>
    </div>
}

export default Location;