import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {increment, decrement} from './src/redux/counterSlice';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store';

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

const LotsOfGreetings = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <Provider store={store}>
      <Text> {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </Provider>
  );
};

export default LotsOfGreetings;
