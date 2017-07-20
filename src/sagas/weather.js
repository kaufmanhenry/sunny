import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants/weather';

import fetchWeatherApi from '../api/weather';

function* getWeatherFlow(action) {
  const { location } = action;
  try {
    const response = yield call(fetchWeatherApi, location);
    yield put({
      type: GET_WEATHER_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: GET_WEATHER_FAILURE,
      error
    });
  }
}


function* weatherWatcher() {
  yield takeLatest(GET_WEATHER_REQUEST, getWeatherFlow);
}

export default weatherWatcher;
