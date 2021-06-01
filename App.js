import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loging from './src/components/screen/Loging'
import Signup from './src/components/screen/Signup';


export default function App() {
  return (
    <View style={styles.container}>
     <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
