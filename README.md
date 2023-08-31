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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { UPScreenWrapper, UPModal } from 'react-native-uzaverse-pay';
import { useRef } from 'react';

export default function App() {
  const upModalRef = useRef(null);
  
  function openModal() {
    upModalRef.current?.present();
  }

  return (
    <UPScreenWrapper style={styles.container}>
      <Button title="Donate" onPress={openModal} />
      <UPModal ref={upModalRef} />
      <StatusBar style="auto" />
    </UPScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
