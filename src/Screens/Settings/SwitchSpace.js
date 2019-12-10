import React from 'react';
import { Text, View, ScrollView, Switch } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

export default class SwitchSpace extends React.Component {

    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    }

    render(){
        const ICON_SIZE = 30;
        return (
            <View style={styles.containerSwitch}>
                <Text style={styles.textSwitch}>{
                    this.state.switchValue?this.props.textSwitchOn:this.props.textSwitchOff
                }</Text>
                <Switch
                    style={styles.switch}
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.switchValue}
                    trackColor={{true: 'black'}}/>
            </View>
        )           
    }
}