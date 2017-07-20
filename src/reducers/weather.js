import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants/weather';

const defaultState = {
  loading: false,
  loaded: false,
  currentWeather: {}
};

export default function (state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        currentWeather: response
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
