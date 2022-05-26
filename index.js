// In index.js of a new project
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LotsOfGreetings from './LottaGreetings';

const HomeScreen = props => {
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.txt}>Home page</Text>
      </View>
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
                  rightButtons: [
                    {
                      id: 'addPost',
                      text: 'Add',
                    },
                  ],
                },
              },
            },
          })
        }
        title="More..."
      />
    </>
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
Navigation.registerComponent('Details', () => LotsOfGreetings);

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
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#81C3D7',
    padding: 10,
    marginBottom: 10,
  },
});
