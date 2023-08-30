import React, { forwardRef } from 'react';
import UPModalContent from './UPModalContent';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import type { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

type PropsTypes = {};

const UPModal = forwardRef<BottomSheetModalMethods, PropsTypes>(
  (_props: PropsTypes, ref) => {
    const snapPoints = ['25%', '48%'];

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={styles.container}
      >
        <UPModalContent />
      </BottomSheetModal>
    );
  }
);

export default UPModal;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#ff7900',
  },
});
