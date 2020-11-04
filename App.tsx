/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import About from './src/screens/About';
import Stock from './src/screens/Stock';
import {TickerProvider} from './src/TickerContext';

declare const global: {HermesInternal: null | {}};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TickerProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="О приложении" component={About} />
              <Tab.Screen name="Котировки" component={Stock} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </TickerProvider>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;
