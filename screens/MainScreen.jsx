import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';

export default function MainScreen({navigation}) {
  const naviagtionHandler = () => {
    navigation.navigate('useeffect-screen');
  };
  return (
    <SafeAreaView>
      <Button title="useEffect-Hook" onPress={naviagtionHandler} />
      <Button title="useRef-Hook" onPress={naviagtionHandler} />
      <Button title="useContext-Hook" onPress={naviagtionHandler} />
      <Button title="useReducer-Hook" onPress={naviagtionHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
