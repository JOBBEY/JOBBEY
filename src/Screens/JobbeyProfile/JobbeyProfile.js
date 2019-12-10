import React, { Component } from 'react'
import NavigationService from '../../../Navigation/NavigationService'
import { Avatar } from "react-native-elements";
import NavigationBar from '../NavBar/NavBarJobbey';
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
    nextScreenRequest = () => {
      NavigationService.navigate("Request");
    }
    nextScreenLogOut = () => {
      NavigationService.navigate("Login")
    }

    render() {
        return (
          <View>
            <NavigationBar/>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.header}></View>
                  <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                  <View style={styles.body}>
                    <View style={styles.bodyContent}>
                      <Text style={styles.name}>Christian Sanabria</Text>
                      <Text style={styles.info}>Calificación 4.99</Text>
                      <Text style={styles.description}>Violinista profecional, no solo se dan clases, se reparan violines a precios economicos</Text>            
                      <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={this.nextScreenRequest}
                        >
                        <Text style={styles.text}>Ayudar a alguien</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={this.nextScreenLogOut}
                        >
                        <Text style={styles.text}>Cerrar sesión</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      }
}