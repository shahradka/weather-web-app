import { FORECAST_DAYS_LIMIT } from "@constants/environments";
import { ForecastState } from "@redux/slices/forecastSlice";
import type{ RootState } from "@redux/store";

export const selectForecast = (state: RootState) => ({
    daily:{
        city_name:state.forecast.daily?.city_name, 
        country_code:state.forecast.daily?.country_code,
        data: state.forecast.daily?.data.slice(0, Number(FORECAST_DAYS_LIMIT))
    }, 
    error:state.forecast.error, 
    loading:state.forecast.loading} as ForecastState
);