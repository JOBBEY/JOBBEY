import React, { Component } from 'react'
import NavigationService from '../../../Navigation/NavigationService'
import { Avatar } from "react-native-elements";
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'

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

}