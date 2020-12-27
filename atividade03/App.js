import React from 'react';
import { StyleSheet, View } from 'react-native';

import IMCApp from './src/IMCApp'

export default function App() {
  return (
    <View style={styles.container}>
      <IMCApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  }
});

