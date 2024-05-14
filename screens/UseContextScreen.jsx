import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {createContext, useState} from 'react';
import ChildContext from '../components/ChildContext';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export const GlobalInfo = createContext();

export default function UseContextScreen() {
  const [data, setData] = useState('red');
  const [superChildData, setSuperChildData] = useState('');

  const getData = item => {
    console.log(item);
    setSuperChildData(item);
  };
  return (
    <SafeAreaView>
      <GlobalInfo.Provider value={{contextData: data, parentFunc: getData}}>
        <View>
          <Text>useContext</Text>
          <ChildContext />
          <Text>{superChildData}</Text>
        </View>
      </GlobalInfo.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
