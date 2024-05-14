import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../screens/UseContextScreen';

export default function SuperChildContext() {
  const contextData = useContext(GlobalInfo);
  console.log(contextData);
  return (
    <View>
      <Text style={{color: contextData.contextData}}>SuperChildContext</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
