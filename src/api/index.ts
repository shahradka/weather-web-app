import axios from "axios";
import { API_URL_ROOT } from "../constants/environments";

console.log("API_URL_ROOT", API_URL_ROOT)

const axios_instance = axios.create({
    baseURL: API_URL_ROOT,
    timeout: 1000,
  });

export {axios_instance}