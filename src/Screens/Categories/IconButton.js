import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'

export default class IconButton extends Component {
    nextScreen = () => {
        NavigationService.navigate("Rate");
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.nextScreen}
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
