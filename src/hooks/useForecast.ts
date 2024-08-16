import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectForecast } from "@redux/selectors/forecast";
import { fetchWeatherForecast } from "@api/forecast";
import { useEffect } from "react";
import { useCurrentLocation } from "./useCurrentLocation";
import { useAppGeoLocation } from "./useAppGeoLocation";

const useForecast = () => {

    const dispatch = useAppDispatch();

    const {daily, loading} = useAppSelector(selectForecast);
    const {currentCoord} = useCurrentLocation();
    const {geoLocation} = useAppGeoLocation();
    
    useEffect(() => {
        if(geoLocation)
            dispatch(fetchWeatherForecast({latitude:geoLocation?.lat, longitude:geoLocation?.long}));
        else
            dispatch(fetchWeatherForecast({latitude:currentCoord?.lat, longitude:currentCoord?.long}));
    }, [dispatch])
    

    return {
        dailyForecast: daily,
        loading
    }

}

export {useForecast};