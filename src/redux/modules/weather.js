import createApiRequest from '../../utils/createApiRequest';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  currentWeather: {}
};

export default function (state = initialState, action) {
  const { response } = action;
  switch (action.type) {
    case GET_WEATHER:
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

export function fetchWeather(location) {
  return {
    type: GET_WEATHER,
    promise: createApiRequest(`${location.lat},${location.lng}`, 'GET')
  };
}
