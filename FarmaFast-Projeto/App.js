import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ForgotPasswordPharma, ForgotPasswordUser, HomePage, LoginFarmacia, LoginUsuario, RegisterPharma,RegisterUser, UpdateStatus} from './views/importsTelas'
 
 
export default function App() {
 
  const Stack = createNativeStackNavigator();
 
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="LoginUsuario" options={{headerShown: false}} component={LoginUsuario} />
          <Stack.Screen name="LoginFarmacia" options={{headerShown: false}} component={LoginFarmacia} />
          <Stack.Screen name="RegisterPharma" options={{headerShown: false}} component={RegisterPharma} />
          <Stack.Screen name="RegisterUser" options={{headerShown: false}} component={RegisterUser} />
          <Stack.Screen name="ForgotPasswordUser" options={{headerShown: false}} component={ForgotPasswordUser} />
          <Stack.Screen name="ForgotPasswordPharma" options={{headerShown: false}} component={ForgotPasswordPharma} />
          <Stack.Screen name="UpdateStatus" options={{headerShown: false}} component={UpdateStatus} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
 
