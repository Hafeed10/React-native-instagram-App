import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/coponents/screen/Header';
import Home from './src/coponents/include/Home';

const App = () => {
  return (
    <View>
      <Header />
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({})