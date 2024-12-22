import { DEFAULT_GEO_DEFAULT_LON } from "@constants/environments";
import { useEffect, useState } from "react";

const useCurrentLocation = () => {

    const [currentCoord, setCurrentCoord] = useState<{
        lat:number, 
        lon:number
    }>({lat:Number(DEFAULT_GEO_DEFAULT_LON), lon:Number(DEFAULT_GEO_DEFAULT_LON)});

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentCoord({lat:position.coords.latitude, lon:position.coords.longitude})
              });
          } else {
            setCurrentCoord({lat:35, lon:59})
          }
    }, [navigator]);

    return {currentCoord};

} 

export {useCurrentLocation};