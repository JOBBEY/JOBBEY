import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'

export default class RegisterForm extends Component{
    nextScreen = () => {
        NavigationService.navigate("SelectRol");
    }
    render(){
        return(
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.lastName.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.lastName = input}
                    placeholder='Apellido'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.userName.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.userName = input}
                    placeholder='Nombre de usuario'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.email.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.email = input}
                    placeholder='Correo electronico'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    placeholder='Contraseña'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    secureTextEntry
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput2.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar contraseña'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input) => this.passwordInput2 = input}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.nextScreen}>
                    <Text style={styles.buttonText}>¡Registrarse!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}