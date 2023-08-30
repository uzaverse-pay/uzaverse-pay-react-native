# react-native-uzaverse-pay

React Native library that enables developers to integrate online payment functionality into their apps. It supports various payment methods, such as credit cards, mobile money, and bank transfers. It works seamlessly with Android and iOS. With Uzaverse Pay, you can easily accept payments from your users and grow your business

## Installation

Using npm

```sh
npm install react-native-uzaverse-pay
```

Using yarn

```sh
yarn add react-native-uzaverse-pay
```

### Add dependencies

```sh
npm install react-native-gesture-handler@~2.12.0 react-native-reanimated@~3.3.0
```

```sh
yarn add react-native-gesture-handler@~2.12.0 react-native-reanimated@~3.3.0
```

### Configurations

- Add react-native-reanimated/plugin plugin to your babel.config.js.

```js
  module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

NOTE: react-native-reanimated/plugin has to be listed last.

## Example

```js
import React, { useRef } from 'react';
import { StyleSheet, Button } from 'react-native';
import { UPScreenWrapper, UPModal, UPBottomSheetModal } from 'react-native-uzaverse-pay';

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
