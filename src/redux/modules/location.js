import positionPromise from '../../utils/positionPromiseWrapper';

export const GET_LOCATION = 'GET_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  location: {}
};

export default function (state = initialState, action) {
  const { response } = action;
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        location: response
      };
    case GET_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}

export function fetchLocation() {
  return {
    type: GET_LOCATION,
    promise: positionPromise()
  };
}
