import React, { useRef } from 'react';

import { StyleSheet, Button } from 'react-native';
import { UzaversePaySheetContent } from 'react-native-uzaverse-pay';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ScreenWrapper from './ScreenWrapper';

export default function App() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = ['25%', '48%'];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <ScreenWrapper style={styles.container}>
      <Button title="Donate" onPress={handlePresentModal} />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={styles.sheetStyle}
      >
        <UzaversePaySheetContent />
      </BottomSheetModal>
    </ScreenWrapper>
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
    backgroundColor: 'red',
  },
  sheetStyle: {
    borderRadius: 20,
    backgroundColor: '#ff7900',
  },
});
