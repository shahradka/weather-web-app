import { Pin24 } from "@components/atoms/icons/Pin";
import { Text } from "@components/atoms/text";
import React from "react";
import { HtmlHTMLAttributes } from "react";
import "./styles.scss";

interface ILocation extends HtmlHTMLAttributes<HTMLDivElement>{
    country:string
    city:string
}

const Location = ({city, country}:ILocation) => {

    return <div className="location">

        <Pin24 />
        <Text variant="small" color="gray" className="location-label">
            Country:
        </Text>
        <Text>
            {country}
        </Text>
        <Text variant="small" color="gray" className="location-label">
            City:
        </Text>
        <Text>
            {city}
        </Text>
    </div>
}

export default Location;