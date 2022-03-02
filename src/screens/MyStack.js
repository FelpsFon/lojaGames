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
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Bem-vindo!' }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{ title: 'Aproveite a nossa seleção!' }}
        />
        <Stack.Screen name="Details" component={Details}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;