import { useEffect, useState } from "react";

const useCurrentLocation = () => {

    const [currentCoord, setCurrentCoord] = useState<{
        lat:number, 
        long:number
    }>({lat:35, long:59});

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentCoord({lat:position.coords.latitude, long:position.coords.longitude})
              });
          } else {
            setCurrentCoord({lat:35, long:59})
          }
    }, [navigator]);

    return {currentCoord};

} 

export {useCurrentLocation};