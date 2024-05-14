import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../screens/UseContextScreen';

export default function SuperChildContext() {
  const contextData = useContext(GlobalInfo);
  console.log(contextData);

  const dataInSuperChild = 'super child data';
  return (
    <View>
      <Text style={{color: contextData.contextData}}>SuperChildContext</Text>
      <Button
        title="Superchild Button"
        onPress={() => contextData.parentFunc(dataInSuperChild)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
