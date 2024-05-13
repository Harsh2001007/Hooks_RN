import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';

export default function MainScreen({navigation}) {
  const useEffectScreenHandler = () => {
    navigation.navigate('useeffect-screen');
  };

  const useRefScreenHandler = () => {
    navigation.navigate('useref-screen');
  };

  return (
    <SafeAreaView>
      <Button title="useEffect-Hook" onPress={useEffectScreenHandler} />
      <Button title="useRef-Hook" onPress={useRefScreenHandler} />
      <Button title="useContext-Hook" onPress={console.log('hello')} />
      <Button title="useReducer-Hook" onPress={console.log('hello')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
