import React, { type ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type PropsType = {
  style: StyleProp<ViewStyle>;
  children: ReactNode;
};

const ScreenWrapper = (props: PropsType) => {
  return (
    <GestureHandlerRootView style={props.style}>
      <BottomSheetModalProvider>{props.children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default ScreenWrapper;
