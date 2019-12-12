import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native'
import Snackbar from 'react-native-snackbar';
import NavigationService from '../../../Navigation/NavigationService'
import NavigationBar from '../NavBar/NavBarUser';
import styles from './Styled'

export default class RequestForm extends Component{
    constructor(props) { 
        super(props); 
        
        this.state = {
            textInput : []
          }
    }
    nextScreen = () => {

        NavigationService.navigate("History");
        Snackbar.show({title:'Se ha creado la solicitud!'})
    }

    addTextInput = (key) => {
        let textInput = this.state.textInput;
        textInput.push(
            <TextInput 
                key={key}
                style={styles.inputTextPlus}/>);
        this.setState({ textInput })
      }

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar />
                <ScrollView>
                    <View style={styles.containerForm}>
                        <Text
                            style={styles.Text2}>
                            Describe tu problema
                        </Text>

                        <TextInput
                            style={styles.inputDescription}
                            multiline={true}
                            numberOfLines={4}
                            placeholder='Describe tu problema'
                            placeholderTextColor='rgba(255, 255, 255, 0.7)'
                            returnKeyType='next'
                            autoCapitalize='none'                        
                            />
                        <Text
                            style={
                                {color:'white'}
                            }
                        >
                            Actividades:
                        </Text>    
                        {this.state.textInput.map((value, index) => {
                            return value
                        })}
                        <View style={styles.containerPlus}>
                            <TouchableOpacity
                                style={styles.ButtonPlus}
                                onPress={() => this.addTextInput(this.state.textInput.length)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Text2}>Precio que estás dispuesto a pagar:</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.inputTextPlus2} />
                        <View>
                            <TouchableOpacity
                                style={styles.ButtonFormContainer}
                                onPress={this.nextScreen}>
                                <Text style={styles.ButtonText}>Crear la solicitud</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}