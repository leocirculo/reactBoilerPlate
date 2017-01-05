import axios from 'axios';

const API_KEY = "c408b39fc1af9b1d70df69141de6059d";
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},ar`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
