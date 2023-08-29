import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-uzaverse-pay';

export default function App() {
  const result = multiply(3, 10);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
