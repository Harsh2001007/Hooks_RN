import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function UseEffectScreen() {
  const [data, setData] = useState('');
  const [key, setKey] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('basic use of use effect');
  }, []);

  const dataHandler = () => {
    setData('data state');
    console.log('data clicked');
  };

  const keyHandler = () => {
    setKey('key updated');
    console.log('key clicked');
  };

  const countHandler = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Button title="Data" onPress={dataHandler} />
      <Button title="Key" onPress={keyHandler} />
      <Text>count :: {count}</Text>
      <Button title="counter" onPress={countHandler} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          borderWidth: 1,
          borderColor: 'black',
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
