import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Snackbar from 'react-native-snackbar';
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'

export default class LoginForm extends Component{
    nextScreenLogIn = () => {
      NavigationService.navigate("SelectRol");
    }
    nextScreenRegister = () => {
      NavigationService.navigate("Register");
    }
    state = {
        email : '',
        password : ''
    }
    loginRequest = async () => {
        try {
            let response = await fetch(
                `https://us-central1-jobbeyback.cloudfunctions.net/loginUser?email=${this.state.email}&password=${this.state.password}`,
            );
            response.text().then((text) => {
                Snackbar.show({ title: text })
                if (text == 'Login successfull!'){
                    this.nextScreenLogIn()
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
    render(){
        return(
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Usuario o email'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(email) => { this.setState({ email : email})}}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    secureTextEntry
                    returnKeyType='go'
                    onChangeText={(password) => { this.setState({ password: password }) }}
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={this.loginRequest}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.loginRequest}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
                <View style={styles.noAcount}>
                    <Text style={styles.buttonText}>
                        ¿No tienes cuenta?
                    </Text>
                    <TouchableOpacity
                        onPress={this.nextScreenRegister}>
                        <Text style={styles.buttonText}>¡Registrate!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}