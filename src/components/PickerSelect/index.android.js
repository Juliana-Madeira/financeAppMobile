import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Picker as RNPickerSelect } from '@react-native-picker/picker'

export default function Picker({ onChange, type}){
    return(
        <View style={styles.pickerView}>
            <RNPickerSelect
            style={{
                width: '100%',
            }}
            selectedValue={type}
            onValueChange={(valueSelected) => onChange(valueSelected)}
            >
                <RNPickerSelect.Item label='Selecione o tipo' value={ null }/>
                <RNPickerSelect.Item label='Receita' value='receita'/>
                <RNPickerSelect.Item label='Despesa' value='despesa'/>
            </RNPickerSelect>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerView: {
        backgroundColor: '#FFF',
        marginTop: 20,
        alignItems: 'center',
        width: '85%',
        height: 60,
        borderRadius: 7,
    }
})