import { useForecast } from "@hooks/useForecast";
import React, { lazy, Suspense, useEffect, useMemo } from "react";
import { convertOpenMetroData, convertToCurrentWeather } from "../../../utils/convertOpenMetroData";
import { IForecast } from "@components/templates/forecast/Forecast";
import { useAppLoad } from "@hooks/useAppLoad";
import { Empty } from "@components/molecules/empty";
import { setParentWindowInfo } from "../../../utils/setInfo";
import { useCurrentLocation } from "@hooks/useCurrentLocation";
import { useAppGeoLocation } from "@hooks/useAppGeoLocation";
import { Loading } from "@components/atoms/loading";

const Forecast = lazy(() => import('@components/templates/forecast/Forecast'));

const Weather = () => {
    const {dailyForecast, loading, dispatchWeatherForeCast} = useForecast();

    const {currentCoord} = useCurrentLocation();
    const {geoLocation} = useAppGeoLocation();

    const {loadApp} = useAppLoad();

    const dehydrateData = useMemo(() => {
        if(!loading)
            {
                const currentWeather = convertToCurrentWeather(dailyForecast);
                setParentWindowInfo(currentWeather);
                return convertOpenMetroData(dailyForecast);
            }
            return {} as IForecast
        }, [dailyForecast, loading])
        
    useEffect(() => {
        if(loadApp){
            if(geoLocation)
                dispatchWeatherForeCast(geoLocation);
            else
                dispatchWeatherForeCast(currentCoord);
        }
    }, [loadApp])

    return <div>
        <Suspense>
            {loadApp ? loading ? <Loading /> :
                <Forecast currentWeatherData={dehydrateData.currentWeatherData} 
                forecastWeatherData={dehydrateData.forecastWeatherData} /> : <Empty />
            }
        </Suspense>
    </div>
}

export default Weather;