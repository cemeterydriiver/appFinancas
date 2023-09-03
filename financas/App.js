import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Entradas from './src/pages/Entradas';
import Boletos from './src/pages/Boletos';
import Carteira from './src/pages/Carteira';
import Compras from './src/pages/Compras';
import Conta from './src/pages/Conta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Entradas" component={Entradas} />
        <Stack.Screen name="Boletos" component={Boletos}/>
        <Stack.Screen name="Carteira" component={Carteira}/>
        <Stack.Screen name="Compras" component={Compras}/>
        <Stack.Screen name="Conta" component={Conta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
