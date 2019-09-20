import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './Styled'

export default class SelectRoll extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.buttonText2}>
                        Bienvenido, ¿qué rol quieres desempeñar el día de hoy?
                </Text>
                <View style={styles.logoContainer}></View>
                    <TouchableOpacity style={styles.buttonContainer2}>
                        <Image
                            source={require('../../assets/scooter.png')}
                        />
                        <Text
                            style={styles.buttonText}>
                            Quiero ser un JOBBEY
                        </Text>
                    </TouchableOpacity>
                <View/>
                <TouchableOpacity style={styles.buttonContainer3}>
                    <Image
                        source={require('../../assets/support.png')}
                    />
                    <Text
                        style={styles.buttonText}>
                        Quiero solicitar un JOBBEY
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}