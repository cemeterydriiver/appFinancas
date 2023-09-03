import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const myCards = [
  {
    id: 1,
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Kenny McCormick',
    expiryDate: '12/25',
    cardType: 'Crédito',
    cardBrand: 'Visa',
  },
  {
    id: 2,
    cardNumber: '**** **** **** 5678',
    cardHolder: 'Kenny McCormick',
    expiryDate: '10/24',
    cardType: 'Débito',
    cardBrand: 'Mastercard',
  },
];

export default function Carteira() {
  return (
    <View style={styles.container}>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saldo Disponível</Text>
        <Text style={styles.sectionValue}>R$ 24,00</Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cofrinhos</Text>
        <Text style={styles.sectionValue}>R$ 100,00</Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Investimentos</Text>
        <Text style={styles.sectionValue}>R$ 10,00</Text>
      </View>

      
      <Text style={styles.cardsTitle}>Meus Cartões</Text>
      <FlatList
        data={myCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={styles.cardType}>{item.cardType}</Text>
            <Text style={styles.cardBrand}>{item.cardBrand}</Text>
            <Text style={styles.cardNumber}>{item.cardNumber}</Text>
            <Text style={styles.cardHolder}>{item.cardHolder}</Text>
            <Text style={styles.expiryDate}>{`Expira em: ${item.expiryDate}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionValue: {
    fontSize: 24,
    
  },
  cardsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 16,
  },
  cardItem: {
    backgroundColor: '#F2740B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  cardType: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardBrand: {
    fontSize: 16,
    color: '#fff',
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardHolder: {
    fontSize: 14,
    color: '#fff',
  },
  expiryDate: {
    fontSize: 14,
    color: '#fff',
  },
});
