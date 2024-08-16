import { useForecast } from "@hooks/useForecast";
import React, { lazy, Suspense, useEffect, useMemo } from "react";
import { convertOpenMetroData, convertToCurrentWeather } from "../../../utils/convertOpenMetroData";
import { IForecast } from "@components/templates/forecast/Forecast";
import { useAppLoad } from "@hooks/useAppLoad";
import { Empty } from "@components/molecules/empty";
import { setParentWindowInfo } from "../../../utils/setInfo";

const Forecast = lazy(() => import('@components/templates/forecast/Forecast'));

const Weather = () => {
    const {dailyForecast, loading} = useForecast();
    const {loadApp} = useAppLoad();

    const dehydrateData = useMemo(() => {
        if(!loading)
            {
                return convertOpenMetroData(dailyForecast);
            }
            return {} as IForecast
        }, [dailyForecast, loading])
        
    useEffect(() => {
        if(loadApp){
            const currentWeather = convertToCurrentWeather(dailyForecast);
            setParentWindowInfo(currentWeather);
        }
    }, [loadApp])

    return <div>
        <Suspense>
            {loadApp ? 
                <Forecast currentWeatherData={dehydrateData.currentWeatherData} 
                forecastWeatherData={dehydrateData.forecastWeatherData} /> : <Empty />
            }
        </Suspense>
    </div>
}

export default Weather;