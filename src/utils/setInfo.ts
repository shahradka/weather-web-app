import { IForecast } from "@components/templates/forecast/Forecast";

export const setParentWindowInfo = (infoMsg:IForecast["currentWeatherData"]) => {
    window.parent.postMessage(infoMsg, '*');
}