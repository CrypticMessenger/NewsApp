import React,{useState} from "react";
// 1. import `NativeBaseProvider` component
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeBaseProvider, Text, Box,Button ,Heading,Center} from "native-base";
import Login from "./Login"
export default function App() {
  
  // 2. Use at the root of your app
  const colorScheme = Appearance.getColorScheme();
//   const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('abc@gmail.com')
//     if(value !== null) {
//       setIsLoggedIn(true)
//       console.log('logged In')
//     }
//     else{
//       console.log('not logged in')
//     }
//   } catch(e) {
//     // error reading value
//   }
// }


// getData();

  return (
    <NativeBaseProvider>
    <Center flex={1} px="3">
      {<Login />}
    </Center>
    </NativeBaseProvider>
  );
}