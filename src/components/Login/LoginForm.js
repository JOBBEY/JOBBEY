import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Usuario o email'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#2d3436',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#dfe6e9',
        fontWeight: '700'
    }
});