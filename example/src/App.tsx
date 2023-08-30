import React, { useRef } from 'react';
import { StyleSheet, Button } from 'react-native';
import {
  UPScreenWrapper,
  UPModal,
  UPBottomSheetModal,
} from 'react-native-uzaverse-pay';

export default function App() {
  const upModalRef = useRef<UPBottomSheetModal>(null);

  function openModal() {
    upModalRef.current?.present();
  }

  return (
    <UPScreenWrapper style={styles.container}>
      <Button title="Donate" onPress={openModal} />
      <UPModal ref={upModalRef} />
    </UPScreenWrapper>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
