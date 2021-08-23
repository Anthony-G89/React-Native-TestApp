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
          <View>
           <Text>Home</Text> 
           <Text>About</Text> 
           <Text>Contact</Text> 
           
          

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
});
