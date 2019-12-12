import React, { Component } from 'react'
import NavigationService from '../../../Navigation/NavigationService'
import { Avatar } from "react-native-elements";
import NavigationBar from '../NavBar/NavBarUser';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styled';

<Avatar
  size="xlarge"
  rounded
  icon={{name: 'home', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 5, marginRight: 60}}
/>

export default class UserProfile extends Component{
    nextScreen = () => {
        NavigationService.navigate("Categories");
    }
    nextScreenLogOut = () => {
      NavigationService.navigate("Login")
    }

    render() {
      return (
        <View style={styles.container}>
          <NavigationBar />
          <ScrollView>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>Daniel Escobar</Text>
                <Text style={styles.info}>Calificación 4.99</Text>
                <Text style={styles.description}>Estudiante Maestría en Ing. de Sistemas</Text>
                          
                <TouchableOpacity style={styles.buttonContainer} onPress={this.nextScreen}>
                  <Text style={styles.text}>Buscar ayuda</Text> 
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.buttonContainer} 
                  onPress={this.nextScreenLogOut}
                  >
                  <Text style={styles.text}>Cerrar sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
}