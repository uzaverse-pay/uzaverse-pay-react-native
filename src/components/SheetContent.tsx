import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SheetContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UzaversePay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7900',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});
