import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectForecast } from "@redux/selectors/forecast";
import { fetchWeatherForecast } from "@api/forecast";

const useForecast = () => {

    const dispatch = useAppDispatch();

    const {daily, loading} = useAppSelector(selectForecast);

    return {
        dailyForecast: daily,
        loading,
        dispatchWeatherForeCast: (geoInfo:{lat:number, long:number}) => dispatch(fetchWeatherForecast({latitude:geoInfo.lat, longitude:geoInfo.long}))
    }

}

export {useForecast};