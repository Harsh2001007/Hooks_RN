import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../screens/UseContextScreen';

export default function ChildContext() {
  const {contextData} = useContext(GlobalInfo);
  return (
    <View>
      <Text style={{color: contextData}}>ChildContext</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
