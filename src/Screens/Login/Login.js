import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import LoginForm from './LoginForm'
import styles from './Styled'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
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
                </ScrollView>
            </View>
        )
    }
}