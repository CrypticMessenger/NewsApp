import React,{useState} from "react";
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeBaseProvider, Text, Box,Button ,Heading,Center} from "native-base";
import Login from "../Login"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from '../Details'
const Stack = createStackNavigator();
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
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Main" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
    </NavigationContainer>
    
    </NativeBaseProvider>
  );
}