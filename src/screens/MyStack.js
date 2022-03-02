import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
          options={{ title: 'Bem-vindo!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;