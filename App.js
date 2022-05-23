/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import type { Node } from 'react';

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header';
import Foot from './src/components/Foot';
import Middle from './src/components/Middle';
import { WIDTH } from './src/styles/constants';

import { store, persistor } from './src/store';
import Total from './src/screens/Total';
// import Icon from 'react-native-ionicons';

import Settings from './src/screens/Settings';

const Stack = createNativeStackNavigator();

function AppWrapper():Node {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Total" component={Total} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
function App() {
  const { backgroundColor } = useSelector((state) => state.SettingReducer);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.middle}>
          <Middle />
        </View>
        <View style={styles.foot}>
          <Foot />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0.01 * WIDTH,
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  header: {
    flex: 1,
  },
  middle: {
    flex: 10,
  },
  foot: {
    flex: 1,
  },
});

export default AppWrapper;
