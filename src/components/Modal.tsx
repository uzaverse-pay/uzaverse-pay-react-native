import React, { forwardRef } from 'react';
import { UzaversePaySheetContent } from 'react-native-uzaverse-pay';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { StyleProp, ViewStyle } from 'react-native';
import type { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

type PropsTypes = {
  style: StyleProp<
    Omit<ViewStyle, 'left' | 'right' | 'position' | 'top' | 'bottom'>
  >;
};

const UzaversePayModal = forwardRef<BottomSheetModalMethods, PropsTypes>(
  (props: PropsTypes, ref) => {
    const snapPoints = ['25%', '48%'];

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={props.style}
      >
        <UzaversePaySheetContent />
      </BottomSheetModal>
    );
  }
);

export default UzaversePayModal;
