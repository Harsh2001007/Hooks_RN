import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseEffectScreen from './screens/UseEffectScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="main-screen" component={MainScreen} />
        <Stack.Screen name="useeffect-screen" component={UseEffectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
