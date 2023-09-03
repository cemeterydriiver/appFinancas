import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Boletos() {
 return (
    <View style={styles.container}>
    <Text style={styles.text}>Esta é a tela de Boletos</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });