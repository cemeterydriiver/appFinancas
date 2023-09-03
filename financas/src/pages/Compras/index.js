import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';

export default function Compras() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Livro',
      value: '30.00',
      date: '02/09/2023',
    },
    {
      id: 2,
      name: 'Bonecos do Terrance e Phillip',
      value: '50.00',
      date: '12/08/2023',
    },
  ]);
  const [newItem, setNewItem] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newDate, setNewDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, 
      useNativeDriver: true, 
    }).start();
  }, [items]);

  const validateDate = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regex.test(date)) {
      setDateError('Data inválida. Use o formato dd/mm/yyyy');
      return false;
    }

    setDateError('');
    return true;
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '' && validateDate(newDate)) {
      const newItemData = {
        id: Date.now(),
        name: newItem,
        value: newValue,
        date: newDate,
      };
      setItems([...items, newItemData]);
      setNewItem('');
      setNewValue('');
      setNewDate('');
      setDateError('');
    }
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          keyboardType="numeric"
          value={newValue}
          onChangeText={(text) => setNewValue(text)}
        />
        <TextInput
          style={[styles.input, dateError && styles.inputError]}
          placeholder="Data (dd/mm/yyyy)"
          value={newDate}
          onChangeText={(text) => setNewDate(text)}
        />
        {dateError ? <Text style={styles.errorMessage}>{dateError}</Text> : null}
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View
            style={[styles.item, { opacity: fadeAnim }]}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>{`Valor: ${item.value} - Data: ${item.date}`}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveItem(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </Animated.View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#5381BF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 16,
    color: '#777',
  },
  removeButton: {
    backgroundColor: '#F2740B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
