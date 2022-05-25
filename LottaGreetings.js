import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  center: {
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const Greeting = props => {
  return (
    <View style={[styles.center]}>
      <Text style={styles.txt}>{props.name}</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={styles.fill}>
      <View style={[styles.center, {top: 100}]}>
        <Greeting name="React" />
        <Greeting name="Native" />
      </View>
    </View>
  );
};

export default LotsOfGreetings;
