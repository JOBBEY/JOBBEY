import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import NavigationService from '../../../Navigation/NavigationService'
import styles from './Styled'
import IconButton from './IconButton'
import NavigationBar from '../NavBar/NavBarUser';

export default class Categories extends Component {
    nextScreen = () => {
        NavigationService.navigate("Rate");
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar />
                <ScrollView >
                    <Text
                        style={styles.buttonText2}>
                            ¿En qué categoría se encuentra tu solicitud?
                    </Text>
                    <View style={styles.columns}>
                        <View
                            style={styles.containerLeft}>
                            <IconButton
                                displayText='Computación'
                                pngImage={require('../../assets/computer.png')} />
                            <IconButton
                                displayText='Mecánica'
                                pngImage={require('../../assets/mechanic.png')}/>
                            <IconButton
                                displayText='Legales'
                                pngImage={require('../../assets/balance.png')}/>
                        </View>
                        <View
                            style={styles.containerRigth}>
                            <IconButton
                                displayText='Plomería'
                                pngImage={require('../../assets/pipeline.png')} />
                            <IconButton
                                displayText='Educación'
                                pngImage={require('../../assets/education.png')}/>
                            <IconButton
                                displayText='Limpieza'
                                pngImage={require('../../assets/cleaning.png')} />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.nextScreen}>
                        <Text style={styles.buttonText}>Categoría no listada</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}