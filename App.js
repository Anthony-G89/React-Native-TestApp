import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HamburgerMenu from './components/Hamburger-Menu';

export default function App() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <View style={styles.container}>
      <HamburgerMenu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },

});
