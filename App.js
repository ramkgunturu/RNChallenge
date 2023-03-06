/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigation from '@Navigation';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Navigating to search screen
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
