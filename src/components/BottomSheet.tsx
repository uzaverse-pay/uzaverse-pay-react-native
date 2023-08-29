import React from 'react';
import { Text, View } from 'react-native';

export default function BottomSheet({ state }: { state: boolean }) {
  return (
    <View>
      <Text>{state ? 'Show modal' : 'Hide modal'}</Text>
    </View>
  );
}
