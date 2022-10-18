import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Inicial, LoginFarmacia, LoginUsuario, RegisterPharma,RegisterUser} from './views/importsTelas'
 
 
export default function App() {
 
  const Stack = createNativeStackNavigator();
 
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicial" options={{headerShown: false}} component={Inicial} />
          <Stack.Screen name="LoginUsuario" options={{headerShown: false}} component={LoginUsuario} />
          <Stack.Screen name="LoginFarmacia" options={{headerShown: false}} component={LoginFarmacia} />
          <Stack.Screen name="RegisterPharma" options={{headerShown: false}} component={RegisterPharma} />
          <Stack.Screen name="RegisterUser" options={{headerShown: false}} component={RegisterUser} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
 
