import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        paddingVertical: 50
      }
    });
    return (
      <View style={styles.container}>
        <Text>SUNNY</Text>
      </View>
    );
  }
}

export default App;
