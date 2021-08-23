import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <Text className="text">{toggle}</Text>
      <Button title="Click on me" onPress={() => setToggle(!toggle)} />
      {
        toggle && (
          <View style={styles.containerTwo}>
           <Text style={styles.home}>Home</Text> 
           <Text style={styles.about}>About</Text> 
           <Text style={styles.contact}>Contact</Text> 
          </View>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    color: "blue",
    flex: 1,
    fontSize: 15,
    backgroundColor: "orange"
  },
  about: {
    flex: 2,
    backgroundColor: "yellow"
  },
  contact: {
    flex: 3,
    backgroundColor: "green"
  },
  containerTwo: {
    marginTop: 10,
    height: 200,
    width: 200,
    backgroundColor: "red",
  }
});
