import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo_jobbey.png')}
                    />
                    <Text
                        style={styles.title}>
                        Tú solo pide, nosotros nos encargamos del resto.
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00b894'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title:{
        color: '#000',
        marginTop : 10,
        opacity: 0.6
    }
})