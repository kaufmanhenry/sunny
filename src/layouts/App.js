import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchLocation } from '../redux/modules/location';
import { fetchWeather } from '../redux/modules/weather';

class App extends Component {
  componentWillMount() {
    this.props.fetchLocation()
      .then(({ response: { coords: { latitude, longitude } } }) => {
        this.props.fetchWeather({
          latitude,
          longitude
        });
      });
  }

  render() {
    const { weather: { currentWeather: { timezone, currently }, loading, loaded } } = this.props;
    const styles = StyleSheet.create({
      container: {
        paddingVertical: 60,
        paddingHorizontal: 27
      },
      location: {
        fontSize: 16,
        color: '#aaa'
      },
      weather: {
        color: '#111',
        fontSize: 30,
        marginTop: 60
      },
      temp: {
        color: '#FF851B'
      },
      summary: {
        color: '#7FDBFF'
      }
    });
    return (
      <View style={styles.container}>
        {timezone && currently &&
          <View>
            <View>
              <Text style={styles.location}>{timezone}</Text>
            </View>
            <View>
              <Text
                style={styles.weather}
              >It’s <Text style={styles.temp}>{currently.apparentTemperature}°</Text> and <Text style={styles.summary}>{currently.summary.toLowerCase()}</Text>.
              </Text>
            </View>
          </View>
        }
        {loading && !loaded &&
          <View>
            <Text>Loading</Text>
          </View>
        }
      </View>
    );
  }
}

App.propTypes = {
  fetchLocation: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  // location: PropTypes.shape({
  //   location: PropTypes.object
  // }).isRequired,
  weather: PropTypes.shape({
    currentWeather: PropTypes.object,
    loading: PropTypes.bool,
    loaded: PropTypes.bool
  }).isRequired
};

export default connect(
  ({ location, weather }) => ({ location, weather }),
  { fetchLocation, fetchWeather })(App);
