import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Settings = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodySettings}>
        <NavigationBar />
        <Text>Ajustes</Text>
    </View>
  )
}

export default Settings