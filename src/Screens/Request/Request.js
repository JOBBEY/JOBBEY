import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Request = (props) => {
  
  return (
    <View style={styles.BodyRequest}>
      <NavigationBar />
      <ScrollView>
        <Card style={{padding: 10, margin: 10}}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
          <Button
            onPress={() => {}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </Card>
        <Card style={{padding: 10, margin: 10, height: 50}}></Card>
      </ScrollView>
    </View>
  );
}

export default Request