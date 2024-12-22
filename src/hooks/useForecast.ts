import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectForecast } from "@redux/selectors/forecast";
import { fetchWeatherForecast } from "@api/forecast";
import { WEATHER_API_KEY } from "@constants/environments";

const useForecast = () => {

    const dispatch = useAppDispatch();

    const {daily, loading, error} = useAppSelector(selectForecast);

    return {
        dailyForecast: daily,
        loading,
        error,
        dispatchWeatherForeCast: (geoInfo:{lat:number, lon:number}) => dispatch(fetchWeatherForecast({lat:geoInfo.lat, lon:geoInfo.lon, 
            key:WEATHER_API_KEY}))
    }

}

export {useForecast};