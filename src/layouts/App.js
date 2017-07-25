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
        paddingVertical: 50,
        paddingHorizontal: 50
      }
    });
    return (
      <View style={styles.container}>
        {timezone && currently &&
          <View>
            <View>
              <Text>{timezone}</Text>
            </View>
            <View>
              <Text>It’s {currently.apparentTemperature}° and {currently.summary}.</Text>
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
