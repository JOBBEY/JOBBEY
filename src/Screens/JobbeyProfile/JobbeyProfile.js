import React, { Component } from 'react'
import NavigationService from '../../../Navigation/NavigationService'
import { Avatar } from "react-native-elements";
import { Button, ThemeProvider } from 'react-native-elements';
import { Card, ListItem, Icon } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

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

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.header}></View>
              <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>John Doe</Text>
                  <Text style={styles.info}>Calificación 4.99</Text>
                  <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                           
                  <TouchableOpacity 
                    style={styles.buttonContainer} 
                    //onPress={this.nextScreen}
                    >
                    <Text>Ayudar a alguien</Text> 
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        );
      }
/*
    render() {
        return (
            <Card
                title='Bienvenido'>
                <ThemeProvider>
                <ListItem
                    leftAvatar={{
                        title: "Hey!",
                        source: { uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
                        showEditButton: true,
                        size:"xlarge",
                    }}
                    title={"Hey11!"}
                    subtitle={"Hey2222!"}
                    chevron
                    size="xlarge"
                />
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Buscar'
                    onPress={this.nextScreen} />
            </ThemeProvider>
            </Card>
                
            
        )
    }
*/
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00b16A",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00b16A",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00B16a",
    },
  });