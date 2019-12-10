import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { PricingCard } from 'react-native-elements';
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const History = (props) => {
  
  const ICON_SIZE = 30;
  return (
    <View style={styles.BodyHistory}>
      <ScrollView>
        <NavigationBar />
        < PricingCard
        color = "#4f9deb"
        title = "Free"
        price = "$0"
        info = {
          ['1 User', 'Basic Support', 'All Core Features']
        }
        button = {
          {
            title: 'GET STARTED',
            icon: 'flight-takeoff'
          }
        }
        />;
      </ScrollView>
    </View>
  )
}

export default History