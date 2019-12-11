import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'
import firebase from 'react-native-firebase'
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin'

export default class SignUpForm extends Component{

    constructor(props){
        super(props);
        this.unsubscriber = null;
        this.state={
            isAuthenticated: false,
            typedEmail:'',
            typedPassword:'',
            user:null,
        };
    }
    componentDidMount= async () => {
        this.unsubscriber = firebase.auth().onAuthStateChanged( (changedUser) => {
            this.setState( {user: changedUser} );
        } );
        
    }

    componentWillUnmount(){
        if (this.unsubscriber){
            this.unsubscriber();
        }
    }

    nextScreen = () => {
        NavigationService.navigate("SelectRol");
    }

    loginScreen = ()=>{
        NavigationService.navigate("Login");
    }

    onRegister = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then( ( loggedInUser ) => {
            this.setState({user: loggedInUser})
            Alert.alert('Successful sign up', loggedInUser.toString() )
            console.log('Register with user: ${JSON.stringify( loggedInUser.toJSON() )}');
            NavigationService.navigate("SelectRol");
        }).catch( (error) => {
            Alert.alert('Sign Up fail ', error.toString() )
            console.log('Reegister fail with error: ${error}');
        })
    }

    render(){
        return(
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    autoCapitalize='none'
                    onChangeText={
                        (text)=>{
                            this.setState( {typedName: text} );
                        }
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Apellido'
                    autoCapitalize='none'
                    onChangeText={
                        (text)=>{
                            this.setState( {typedLastName: text} );
                        }
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Correo electrónico'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={
                        (text)=>{
                            this.setState( {typedEmail: text} );
                        }
                    }
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    secureTextEntry
                    returnKeyType='go'
                    onChangeText={
                        (text)=>{
                            this.setState( {typedPassword: text} );
                        }
                    }
                    ref={(input) => this.passwordInput = input}
                />
                <View>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.onRegister}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
                    <Text> ¿Ya tienes una cuenta?  
                        <Text 
                            onPress={this.loginScreen}
                            style={styles.title}> 
                         Login </Text>
                    </Text>
                </View>
            </View>  
        )
    }
}