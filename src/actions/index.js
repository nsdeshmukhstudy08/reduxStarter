import axios from "axios";

const API_key = '88514f05ce68f92bf29667b0d91534f1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const URL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(URL);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}