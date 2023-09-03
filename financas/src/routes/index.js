import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Actions from './Actions';
import Entradas from '../../src/pages/Entradas'
import Boletos from '../../src/pages/Boletos'
import Carteira from '../../src/pages/Carteira'
import Compras from '../../src/pages/Compras'
import Conta from '../../src/pages/Conta'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Actions">
        <Stack.Screen name="Actions" component={Actions} />
        <Stack.Screen name="Entradas" component={Entradas} />
        <Stack.Screen name="Compras" component={Compras} />
        <Stack.Screen name="Carteira" component={Carteira} />
        <Stack.Screen name="Boletos" component={Boletos} />
        <Stack.Screen name="Conta" component={Conta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
