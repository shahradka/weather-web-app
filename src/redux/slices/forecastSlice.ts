import { createSlice, SerializedError } from '@reduxjs/toolkit'
import type { FORECAST_DAILY_RESPONSE } from '../../types/weather';
import { fetchWeatherForecast } from '@api/forecast'

export interface ForecastState {
  daily?:FORECAST_DAILY_RESPONSE
  error?: SerializedError
  loading?: boolean

}

const initialState: ForecastState = {
  daily: undefined,
  error: undefined,
  loading:false,
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
   },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
      state.daily = action.payload;
      state.loading = false;
    })
    .addCase(fetchWeatherForecast.rejected, (state, action) => {
      state.error = action.payload as SerializedError; 
      state.daily = undefined;
      state.loading = false;
    })
    .addCase(fetchWeatherForecast.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });

  },
})

export const actions = forecastSlice.actions

export default forecastSlice.reducer