import { GET_WEATHER_REQUEST } from '../constants/weather';

export default function getWeatherRequest(location) {
  return {
    type: GET_WEATHER_REQUEST,
    location
  };
}
