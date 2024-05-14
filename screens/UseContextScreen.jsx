import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {createContext, useState} from 'react';
import ChildContext from '../components/ChildContext';

export const GlobalInfo = createContext();

export default function UseContextScreen() {
  const [data, setData] = useState('red');
  return (
    <SafeAreaView>
      <GlobalInfo.Provider value={{contextData: data}}>
        <View>
          <Text>useContext</Text>
          <ChildContext />
        </View>
      </GlobalInfo.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
