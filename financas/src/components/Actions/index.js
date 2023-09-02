import React from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ScrollView,

} from 'react-native';
import { AntDesign } from '@expo/vector-icons'



export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.actionBtn} activeOpacity={0.4}>
            <View style={styles.areaBtn}>
                <AntDesign name='addfolder' size={26} color={'#000'}/>
            </View>
            <Text style={styles.labelBtn}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.areaBtn}>
                <AntDesign name='tagso' size={26} color={'#000'}/>
            </View>
            <Text style={styles.labelBtn}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.areaBtn}>
                <AntDesign name='creditcard' size={26} color={'#000'}/>
            </View>
            <Text style={styles.labelBtn}>Carteira</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.areaBtn}>
                <AntDesign name='barcode' size={26} color={'#000'}/>
            </View>
            <Text style={styles.labelBtn}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.areaBtn}>
                <AntDesign name='setting' size={26} color={'#000'}/>
            </View>
            <Text style={styles.labelBtn}>Conta</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionBtn:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaBtn:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelBtn:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})