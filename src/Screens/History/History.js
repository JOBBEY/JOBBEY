import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const History = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodyHistory}>
      <ScrollView>
        <NavigationBar />
        <Text>Historial</Text>
      </ScrollView>
    </View>
  )
}

export default History