import WeatherSaga from './weather';

const root = function* IndexSaga() {
  yield [
    WeatherSaga()
  ];
};

export default root;
