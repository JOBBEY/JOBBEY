import React from 'react';
import { View, ScrollView } from 'react-native';
import RequestCard from './RequestCard'
import NavigationBar from '../NavBar/NavBarJobbey';
import styles from './Styled';

const Request = (props) => {
  
  return (
    <View style={styles.BodyRequest}>
      <NavigationBar />
      <ScrollView>
        <RequestCard />
      </ScrollView>
    </View>
  );
}

export default Request