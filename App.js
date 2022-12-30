import React from "react";
import { NativeBaseProvider} from "native-base";
import Login from "./Login"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './Details'
const Stack = createStackNavigator();
export default function App() {
   
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    
     <Stack.Navigator initialRouteName="Main" >
      <Stack.Screen name="Main" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Details" component={Details} options={{headerStyle:{
        backgroundColor:'#9333ea',
      }, headerTintColor:'#000000'}}/>
    </Stack.Navigator>
    </NavigationContainer>
    
    </NativeBaseProvider>
  );
}