import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styled'

export default class IconButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonContainer2}>
                    <Image
                        source={this.props.pngImage}
                    />
                    <Text
                        style={styles.buttonText}>
                        {this.props.displayText}
                            </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
