import React, { type ReactNode } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { StyleProp, ViewStyle } from 'react-native';

type PropsType = {
  style: StyleProp<ViewStyle>;
  children: ReactNode;
};

const defaultStyle = { flex: 1 };

const UPScreenWrapper = (props: PropsType) => {
  return (
    <GestureHandlerRootView style={[props.style, defaultStyle]}>
      <BottomSheetModalProvider>{props.children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default UPScreenWrapper;
