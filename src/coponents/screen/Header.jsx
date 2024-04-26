// Header.jsx

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.text}>Instagram</Text>
        <Image style={styles.image} source={require("../../../src/asetss/image/isaq.jpeg")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#000000', // Change this to match your app's theme
    borderBottomWidth: 1,
    borderBottomColor: '#000000', // Change this to match your app's theme
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
export default Header;
