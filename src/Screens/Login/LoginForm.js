import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'
import firebase from 'react-native-firebase'
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin'

export default class LoginForm extends Component{

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
        this._configureGoogleSignIn();
        
    }

    componentWillUnmount(){
        if (this.unsubscriber){
            this.unsubscriber();
        }
    }

    nextScreen = () => {
        NavigationService.navigate("SelectRol");
    }

    
    _configureGoogleSignIn() {
        GoogleSignin.configure({
          webClientId: '563701621446-niqdbvgg8vujvqnll5il0r5ojvb8sjp1.apps.googleusercontent.com',  //Replace with your own client id
          offlineAccess: false,
        });
      }
    
      _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          await GoogleSignin.revokeAccess();
          console.log('Success:',userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
            Alert.alert('cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
            Alert.alert('in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('play services not available or outdated');
          } else {
            console.log('Something went wrong:',error.toString());
            Alert.alert('Something went wrong', error.toString());
            this.setState({
              error,
            });
          }
        }
      };
    onRegister = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then( ( loggedInUser ) => {
            this.setState({user: loggedInUser})
            console.log('Register with user: ${JSON.stringify( loggedInUser.toJSON() )}');
            NavigationService.navigate("SelectRol");
        }).catch( (error) => {
            console.log('Reegister fail with error: ${error}');
        })
    }

    onLogin = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then( ( loggedInUser ) => {
            //this.setState({user: loggedInUser})
            console.log('Login with user: ${JSON.stringify( loggedInUser.toJSON() )}');
            NavigationService.navigate("SelectRol");
        }).catch( (error) => {
            console.log('Login fail with error: ${error}');
        })
    }
    onLoginGoogle = async () =>{
        try {
            // Add any configuration settings here:
            await GoogleSignin.configure();
        
            const data = await GoogleSignin.signIn();
        
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            // login with credential
            const currentUser = await firebase.auth().signInWithCredential(credential);
        
            console.info(JSON.stringify(currentUser.toJSON()));
          } catch (e) {
            console.error(e);
          }
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
                <Text>
                    {this.state.isAuthenticated == true? 'Logged in Anonymous':'' }
                </Text>
                <View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                </View>
                <Text>

                </Text>
                <View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <GoogleSigninButton
                style={{width: 48, height: 48}}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}>

            </GoogleSigninButton>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLoginGoogle}>
                <Text style={styles.buttonText}>Login Google</Text>
            </TouchableOpacity>
            </View>
            </View>
           
        )
    }
}