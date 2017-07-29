import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchLocation } from '../redux/modules/location';
import { fetchWeather } from '../redux/modules/weather';

const pounce = require('./pounce.png');

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
    const {
      weather: {
        currentWeather: {
          timezone,
          currently,
          daily
        },
        loading,
        loaded
      }
    } = this.props;
    const styles = StyleSheet.create({
      container: {
        paddingVertical: 60,
        paddingHorizontal: 27
      },
      location: {
        fontSize: 16,
        color: '#aaa'
      },
      weatherContainer: {
        marginVertical: 60
      },
      weather: {
        color: '#111',
        fontSize: 30
      },
      temp: {
        color: '#FF851B'
      },
      summary: {
        color: '#7FDBFF'
      },
      bottomDesc: {
        color: '#aaa',
        fontWeight: '700',
        fontSize: 12,
        marginBottom: 8
      },
      bottomTitle: {
        color: '#111',
        fontSize: 16,
        lineHeight: 26
      },
      image: {
        width: 260,
        height: 260,
        marginVertical: 15,
        marginHorizontal: 20,
        borderWidth: 10,
        borderColor: 'black'
      },
    });
    return (
      <View style={styles.container}>
        {timezone && currently && daily &&
          <View>
            <View>
              <Text style={styles.location}>{timezone}</Text>
            </View>
            <View style={styles.weatherContainer}>
              <Text style={styles.bottomDesc}>Now</Text>
              <Text
                style={styles.weather}
              ><Text style={styles.temp}>
                {currently.apparentTemperature}°
                </Text> and <Text style={styles.summary}>
                  {currently.summary.toLowerCase()}
                </Text>
              </Text>
            </View>
            <View>
              <View>
                <Text style={styles.bottomDesc}>Summary</Text>
                <Text style={styles.bottomTitle}>{daily.summary}</Text>
                <Image style={styles.image} source={pounce} />
              </View>
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
