import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../screens/UseContextScreen';
import SuperChildContext from './SuperChildContext';

export default function ChildContext() {
  const {contextData} = useContext(GlobalInfo);
  return (
    <View>
      <Text style={{color: contextData}}>ChildContext</Text>
      <SuperChildContext />
    </View>
  );
}

const styles = StyleSheet.create({});
