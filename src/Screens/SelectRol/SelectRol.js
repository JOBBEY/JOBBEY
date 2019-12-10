import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'

export default class SelectRoll extends Component {
    nextScreenUser = () => {
        NavigationService.navigate("UserProfile");
    }
    nextScreenJobbey = () => {
        NavigationService.navigate("JobbeyProfile");
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text
                        style={styles.buttonText2}>
                            Bienvenido, ¿qué rol quieres desempeñar el día de hoy?
                    </Text>
                    <View style={styles.logoContainer}></View>
                        <TouchableOpacity 
                            style={styles.buttonContainer2}
                            onPress={this.nextScreenJobbey}>
                            <Image
                                source={require('../../assets/scooter.png')}
                            />
                            <Text
                                style={styles.buttonText}>
                                Quiero ser un JOBBEY
                            </Text>
                        </TouchableOpacity>
                    <View/>
                    <TouchableOpacity
                        style={styles.buttonContainer3}
                        onPress={this.nextScreenUser}
                        >
                        <Image
                            source={require('../../assets/support.png')}
                        />
                        <Text
                            style={styles.buttonText}>
                            Quiero solicitar un JOBBEY
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}