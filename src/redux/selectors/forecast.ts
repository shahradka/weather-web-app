import type{ RootState } from "@redux/store";

export const selectForecast = (state: RootState) => state.forecast;