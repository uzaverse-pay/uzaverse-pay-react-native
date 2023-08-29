import * as React from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
import { UzaversePayBottomSheet } from 'react-native-uzaverse-pay';

export default function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, this is a test app</Text>
      <Button title="Donate" onPress={() => setShowModal(!showModal)} />
      <UzaversePayBottomSheet state={showModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
  },
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
