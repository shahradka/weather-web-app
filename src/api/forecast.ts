import { FORECAST_DAILY_REQUEST, FORECAST_DAILY_RESPONSE } from "types/weather";
import { axios_instance } from "."
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const fetchWeatherForecast = createAsyncThunk<FORECAST_DAILY_RESPONSE, FORECAST_DAILY_REQUEST>("weather/forecast_daily",
    async ({lat, lon, key, unit = "M"}, thunkApi) =>{
    try {
        const result = await axios_instance.get<FORECAST_DAILY_RESPONSE>("daily",{params:{lat, lon, key, unit}});
        return thunkApi.fulfillWithValue(result.data);
    } catch (error) {
        const err = error as AxiosError;
        return thunkApi.rejectWithValue({status:err.response?.status, message:err.response?.statusText, data:err.response?.data});
    }

})