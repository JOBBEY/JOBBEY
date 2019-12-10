import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Request = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodyRequest}>
        <NavigationBar />
        <Text>Solicitudes</Text>
    </View>
  )
}

export default Request