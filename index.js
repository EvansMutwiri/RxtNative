// In index.js of a new project
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import App from './App';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './src/redux/counterSlice';

const Count = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <Text style={styles.txt}> {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </>
  );
};

const HomeScreen = props => {
  return (
    <Provider store={store}>
      <Text style={styles.txt}>Home page</Text>
      <View style={styles.root}>
        <Count />
      </View>
      <View style={'marginBottom: 20'}>
        <Button
          style={styles.button}
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Details',
                options: {
                  topBar: {
                    title: {
                      text: 'Posts',
                      color: 'white',
                    },
                  },
                },
              },
            })
          }
          title="More..."
        />
      </View>
    </Provider>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Details', () => App);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
          //   {
          //     component: {
          //       name: 'Details',
          //     },
          //   },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },

  topBar: {
    backButton: {
      color: 'white',
    },
    title: {
      color: 'white',
    },
    background: {
      color: '#2364AA',
    },
  },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f8ff',
  },
  txt: {
    color: '#51707d',
    backgroundColor: '#e8f8ff',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#81C3D7',
    marginVertical: 10,
  },
});
