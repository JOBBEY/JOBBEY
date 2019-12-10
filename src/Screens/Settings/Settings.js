import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Settings = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodySettings}>
      <ScrollView>
        <NavigationBar />
        <Text>Ajustes</Text>
      </ScrollView>
    </View>
  )
}

export default Settings