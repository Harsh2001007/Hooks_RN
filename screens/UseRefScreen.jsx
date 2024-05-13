import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function UseRefScreen() {
  const [state, setState] = useState('hello');
  let refHandler = useRef(null);
  function buttonHandler() {
    console.log('btn clicked');
    setState('bye');
  }
  return (
    <SafeAreaView>
      <View>
        <Text>UseRef screen</Text>
      </View>
      <View>
        <TextInput
          ref={refHandler}
          style={{
            borderColor: 'red',
            borderWidth: 1,
            color: 'black',
            height: '30%',
          }}
          value={state}
        />
        <Button title="prop changer" onPress={buttonHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
