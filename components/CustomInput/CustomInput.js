import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder}
             style={styles.input}
             secureTextEntry={secureTextEntry}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 300,
        height:45,
        borderColor: '#e8e88e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginTop:20
        
    },
    input: {
        marginTop:10,
    },

});

export default CustomInput