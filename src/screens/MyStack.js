import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import About from './AboutUs';
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
        <Stack.Screen name="About" component={About}
          options={{ title: '', headerStyle: { backgroundColor: '#43425d' }, headerShadowVisible: false }}
        />
        <Stack.Screen name="Details" component={Details}
          options={{ title: {/*`${DATA.title}`*/}, headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DATA = [
  {
    id: '1',
    title: 'DARK SOULS™',
  },
  {
    id: '2',
    title: 'Minecraft',
  },
  {
    id: '3',
    title: 'Terraria',
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
  },
  {
    id: '5',
    title: 'Gran Turismo 7',
  },
  {
    id: '6',
    title: 'ELDEN RING',
  },
  {
    id: '7',
    title: 'Rain World',
  },
  {
    id: '8',
    title: 'Outer Wilds',
  },
  {
    id: '9',
    title: 'Cyberpunk 2077',
  },
  {
    id: '10',
    title: 'Metro Exodus',
  },
  {
    id: '11',
    title: 'Amnesia: Rebirth',
  },
  {
    id: '12',
    title: 'God of War',
  },
  {
    id: '13',
    title: 'Dying Light 2 Stay Human',
  },
  {
    id: '14',
    title: 'Horizon Zero Dawn™',
  },
  {
    id: '15',
    title: 'Hollow Knight',
  },
];

export default MyStack;