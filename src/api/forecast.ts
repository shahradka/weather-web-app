import { FORECAST_DAILY_RESPONSE, FORECAST_REQUEST } from "types/weather";
import { axios_instance } from "."
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const fetchWeatherForecast = createAsyncThunk<FORECAST_DAILY_RESPONSE, FORECAST_REQUEST>("weather/forecast_daily",
    async ({latitude, longitude}, thunkApi) =>{
    try {
        const result = await axios_instance.get<FORECAST_DAILY_RESPONSE>("forecast",{params:{latitude, longitude, daily: ["apparent_temperature_max", 
            "apparent_temperature_min", 
            "weather_code"]}});
        return thunkApi.fulfillWithValue(result.data);
    } catch (error) {
        const err = error as AxiosError;
        return thunkApi.rejectWithValue(err.response?.status);
    }

})