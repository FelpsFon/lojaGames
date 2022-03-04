import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import About from './AboutUs';

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
        <Stack.Screen name="About" component={About}
          options={{ title: '', headerStyle: {backgroundColor: '#43425d'}, headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;