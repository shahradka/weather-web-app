import { useForecast } from "@hooks/useForecast";
import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { convertWeatherData } from "@utils/convertWeatherBitData";
import { IForecast } from "@components/templates/forecast/Forecast";
import { useCurrentLocation } from "@hooks/useCurrentLocation";
import { Loading } from "@components/atoms/loading";
import { toast } from "react-toastify";
import { useSystemMessage } from "@hooks/useSystemMessage";
import { useLastUpdateTime } from "@hooks/useLastUpdate";

const Forecast = lazy(() => import('@components/templates/forecast/Forecast'));

const Weather = () => {
    const {dailyForecast, loading, dispatchWeatherForeCast, error:errorForecast} = useForecast();
    const {dispatchAddErrorMessage, dispatchResetMessage, systemMessage} = useSystemMessage()
    const {setLastUpdate, lastUpdateFromNow, resetLastUpdate} = useLastUpdateTime()
    const [isUnitFahrenheit, setIsUnitFahrenheit] = useState<boolean>(false)

    const {currentCoord} = useCurrentLocation();

    const onRefreshForecast = () => {
        dispatchWeatherForeCast(currentCoord)
        setIsUnitFahrenheit(false)
    }

    const dehydrateData = useMemo(() => {
        if(!loading)
            {
                setLastUpdate()
                return convertWeatherData(dailyForecast, isUnitFahrenheit? "I" : "M");
            }
            return {} as IForecast
        }, [dailyForecast, loading, isUnitFahrenheit])
        
    useEffect(() => {
        dispatchWeatherForeCast(currentCoord)
    }, [])

    useEffect(() => {
        if(errorForecast)
            {
                resetLastUpdate()
                dispatchAddErrorMessage(errorForecast.message || errorForecast.code || "forecast api error")
            }
    }, [errorForecast])

    useEffect(() => {
        if(systemMessage.type === "Error" && systemMessage.message)
        {
            toast.error(systemMessage.message)
            dispatchResetMessage()
        }
        if(systemMessage.type === "Success" && systemMessage.message)
        {
            toast.success(systemMessage.message)
            dispatchResetMessage()
        }
    }, [systemMessage])

    const handleOnChangeUnit = (checked:boolean) => {
        setIsUnitFahrenheit(checked)
    }

    return <div>
        <Suspense>
            {loading ? <Loading /> :
                <Forecast onChangeUnit={handleOnChangeUnit} onRefreshForecast={onRefreshForecast} 
                lastUpdateTime={lastUpdateFromNow || ""} currentWeatherData={dehydrateData.currentWeatherData} 
                forecastWeatherData={dehydrateData.forecastWeatherData} />
            }
        </Suspense>
    </div>
}

export default Weather;