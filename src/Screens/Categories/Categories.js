import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styled'

export default class Categories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.buttonText2}>
                        ¿En qué categoría se encuentra tu solicitud?
                </Text>
            </View>
        )
    }
}