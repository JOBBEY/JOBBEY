import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './Styled'

export default class SelectRoll extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={require('../../assets/scooter.png')}
                    />
                    <Text
                        style={styles.title}>
                        Quiero ser un JOBBEY
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={require('../../assets/support.png')}
                    />
                    <Text
                        style={styles.title}>
                        Quiero solicitar un JOBBEY
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}