import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'

export default class LoginForm extends Component{
    nextScreen = () => {
        NavigationService.navigate("SelectRol");
    }
    render(){
        return(
            <View style={styles.containerForm}>
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
                <TouchableOpacity style={styles.buttonContainer} onPress={this.nextScreen}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}