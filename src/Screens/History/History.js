import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const History = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodyHistory}>
        <NavigationBar />
        <Text>Historial</Text>
    </View>
  )
}

export default History