import { MESSAGE_GEOLOCATION_NAME } from "../constants/environments";
import { useCallback, useEffect, useState } from "react"

const useAppGeoLocation = () => {    
    const [geoLocation, setGeoLocation] = useState<{lat:number, long:number}>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setGeoLocationApp = useCallback((event: any) => {
        if(event.data[MESSAGE_GEOLOCATION_NAME || ""] !== undefined)
            {
                setGeoLocation(event.data[MESSAGE_GEOLOCATION_NAME || ""])
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