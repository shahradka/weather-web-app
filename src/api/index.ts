import axios from "axios";
import { WEATHER_API_URL } from "../constants/environments";

const axios_instance = axios.create({
    baseURL: WEATHER_API_URL,
    timeout: 1000,
  });

export {axios_instance}