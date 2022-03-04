import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import Details from './Details';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
          options={{ title: 'Aproveite a nossa seleção!', headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Bem-vindo!', headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details}
          options={{ title: `TesteTeste` }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;