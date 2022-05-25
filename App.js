import React, {Component} from 'react';
import LotsOfGreetings from './LottaGreetings';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  arrange: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  txt: {
    fontSize: 18,
    fontWeight: '400',
  },
});
class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <LotsOfGreetings />
        <View style={styles.arrange}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>CLICK</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.txt}>You clicked {this.state.count} times</Text>
          </View>
        </View>
      </>
    );
  }
}

export default App;
