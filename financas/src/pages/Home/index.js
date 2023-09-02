import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const movements = [
  {
    id: 1,
    label: 'Mesada',
    value: '500,00',
    date: '01/09/2023',
    type: 1 
  },
  {
    id: 2,
    label: 'Pix (Kyle)',
    value: '100,00',
    date: '15/09/2023',
    type: 1 
  },
  {
    id: 3,
    label: 'Agiota',
    value: '68.424,42',
    date: '17/09/2023',
    type: 0 
  },
  
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Kenny McCormick'/>

      <Balance saldo='-69.024,42' gastos='-420,00'/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.movements}
        data={movements}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  movements: {
    marginStart: 14,
    marginEnd: 14,
  }
});
