import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

const boletosPagos = [
  {
    id: 1,
    description: 'Aluguel',
    value: 'R$ 1.200,00',
    dueDate: '01/08/2023',
  },
  {
    id: 2,
    description: 'Internet',
    value: 'R$ 100,00',
    dueDate: '05/08/2023',
  },
];

const boletosAPagar = [
  {
    id: 3,
    description: 'Energia',
    value: 'R$ 200,00',
    dueDate: '10/08/2023',
  },
];


const boletosVencidos = [
  {
    id: 4,
    description: 'Gás',
    value: 'R$ 80,00',
    dueDate: '25/07/2023',
  },
];

export default function Boletos() {
  const [selectedSection, setSelectedSection] = useState('pagos');

  const renderSection = (section) => {
    switch (section) {
      case 'pagos':
        return (
          <FlatList
            data={boletosPagos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.billItem}>
                <Text style={styles.billDescription}>{item.description}</Text>
                <Text style={styles.billValue}>{item.value}</Text>
                <Text style={styles.billDueDate}>{`Vencimento: ${item.dueDate}`}</Text>
              </TouchableOpacity>
            )}
          />
        );
      case 'aPagar':
        return (
          <FlatList
            data={boletosAPagar}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.billItem}>
                <Text style={styles.billDescription}>{item.description}</Text>
                <Text style={styles.billValue}>{item.value}</Text>
                <Text style={styles.billDueDate}>{`Vencimento: ${item.dueDate}`}</Text>
              </TouchableOpacity>
            )}
          />
        );
      case 'vencidos':
        return (
          <FlatList
            data={boletosVencidos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.billItem}>
                <Text style={styles.billDescription}>{item.description}</Text>
                <Text style={styles.billValue}>{item.value}</Text>
                <Text style={styles.billDueDate}>{`Vencimento: ${item.dueDate}`}</Text>
              </TouchableOpacity>
            )}
          />
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>

      <View style={styles.dropdownMenu}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            selectedSection === 'pagos' && styles.selectedMenuItem,
          ]}
          onPress={() => setSelectedSection('pagos')}
        >
          <Text style={styles.menuText}>Boletos Pagos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            selectedSection === 'aPagar' && styles.selectedMenuItem,
          ]}
          onPress={() => setSelectedSection('aPagar')}
        >
          <Text style={styles.menuText}>Boletos a Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            selectedSection === 'vencidos' && styles.selectedMenuItem,
          ]}
          onPress={() => setSelectedSection('vencidos')}
        >
          <Text style={styles.menuText}>Boletos Vencidos</Text>
        </TouchableOpacity>
      </View>

     
      {renderSection(selectedSection)}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  dropdownMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  menuItem: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
   
  },
  selectedMenuItem: {
    borderColor: '#F26F03',
   
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#161616',
  },
  billItem: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  billDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  billValue: {
    fontSize: 14,
    color: '#F26F03',
  },
  billDueDate: {
    fontSize: 14,
  },
});
