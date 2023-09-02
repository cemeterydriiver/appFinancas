import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {MotiView} from 'moti'


export default function Balance({ saldo, gastos }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MotiView 
    style={styles.container}
        from={{
            rotateX: '-100deg',
            opacity: 0,
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1,
        }}
        transition={{
            type: 'timing',
            delay: 300,
            duration: 900,
        }}

    
    >
      <TouchableWithoutFeedback
        onPressIn={handleMouseEnter}
        onPressOut={handleMouseLeave}
      >
        <View
          style={[
            styles.item,
            isHovered && styles.itemHovered,
          ]}
        >
          <Text style={styles.itemTitle}>Saldo</Text>
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.gastos}>{gastos}</Text>
        </View>
      </View>

      {isHovered && (
        <Text style={styles.hoverMessage}>Puta Merda, negativaram o Kenny!</Text>
      )}
    </MotiView>
  );
}

const styles = StyleSheet.create({
    container:({
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 5,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    }),
    itemTitle:({
        fontSize: 24,
        color: '#C3C3C3',
    }),
    content:({
        flexDirection: 'row',
        alignItems: 'center',
    }),
    currencySymbol:({
        color:'#C3C3C3',
        marginRight: 6,
    }),
    balance:({
        fontSize: 22,
        color: 'red',
    }),
    gastos:({
        fontSize: 22,
        color: '#EE8449',
    }),
  itemHovered: {
    backgroundColor: '#f0f0f0', 
  },
  itemTitle: {
    fontSize: 24,
    color: '#C3C3C3',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color: '#C3C3C3',
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: 'red',
  },
  gastos: {
    fontSize: 22,
    color: '#EE8449',
  },
  hoverMessage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 18,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    zIndex: 1,
  },
});
