import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Snackbar from 'react-native-snackbar';
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'

export default class RegisterForm extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
    }
    registerRequest = async () => {
        if (this.state.password != this.state.password2){
            Snackbar.show({title: 'Las contraseñas no coinciden'})
            return
        } else if (this.state.name == '' || this.state.email == '' || this.state.password == '' || this.state.password2 == ''){
            Snackbar.show({ title: 'Por favor verifica los campos' })
            return
        }
        try {
            let response = await fetch(
                `https://us-central1-jobbeyback.cloudfunctions.net/createUser?name=${this.state.name}&email=${this.state.email}&password=${this.state.password}`,
            );
            response.text().then((text) => {
                console.log(text)
                Snackbar.show({ title: text })
                if (text == this.state.email + ' created!'){
                    this.nextScreen()
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
    nextScreen = () => {
        NavigationService.navigate("SelectRol");
    }
    render(){
        return(
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombres y apellidos'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({ name: text })}
                    onSubmitEditing={() => this.email.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.email = input}
                    placeholder='Correo electrónico'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({ email: text })}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    placeholder='Contraseña'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    secureTextEntry
                    returnKeyType='next'
                    onChangeText={(text) => this.setState({ password: text })}
                    onSubmitEditing={() => this.passwordInput2.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar contraseña'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    secureTextEntry
                    returnKeyType='go'
                    onChangeText={(text) => this.setState({ password2: text })}
                    ref={(input) => this.passwordInput2 = input}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.registerRequest}>
                    <Text style={styles.buttonText}>¡Registrarse!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}