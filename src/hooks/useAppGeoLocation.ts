import { MESSAGE_GEOLOCATION_NAME } from "../constants/environments";
import { useCallback, useEffect, useState } from "react"

const useAppGeoLocation = () => {    
    const [geoLocation, setGeoLocation] = useState<{lat:number, long:number}>();
    const setGeoLocationApp = useCallback((event: {data:Record<string, string>}) => {    
        const dataObj = event.data;    
        const isKeyExists = Object.keys(dataObj).find(key => key === MESSAGE_GEOLOCATION_NAME);
        if(isKeyExists)
            {
                setGeoLocation(JSON.parse(dataObj[isKeyExists]));
            }
    }, [])

    useEffect(() => {
        window.addEventListener('message', setGeoLocationApp);
        return () => window.removeEventListener('message', setGeoLocationApp);
    }, [])

    return {
        geoLocation
    }
}

export {useAppGeoLocation};