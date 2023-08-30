import React, { useRef } from 'react';

import { StyleSheet, Button, View } from 'react-native';
// import ScreenWrapper from './ScreenWrapper';
// import UzaversePayModal from './Modal';
// import UzaversePaySheetModal from './utils';

export default function App() {
  // const bottomSheetModalRef = useRef<UzaversePaySheetModal>(null);

  // function openModal() {
  //   bottomSheetModalRef.current?.present();
  // }

  // return (
  //   <ScreenWrapper style={styles.container}>
  //     <Button title="Donate" onPress={openModal} />
  //     <UzaversePayModal ref={bottomSheetModalRef} style={styles.sheetStyle} />
  //   </ScreenWrapper>
  // );

  return (
    <View style={styles.container}>
      <Button title="Don" />
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
  sheetStyle: {
    borderRadius: 20,
    backgroundColor: '#ff7900',
  },
});
