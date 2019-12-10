import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Request = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodyRequest}>
      <ScrollView>
        <NavigationBar />
        <Text>Solicitudes</Text>
      </ScrollView>
    </View>
  )
}

export default Request