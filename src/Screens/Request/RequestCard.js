import React, {Component} from 'react';
import {Card} from 'react-native-shadow-cards';
import { Button , View, Text} from 'react-native';
import styles from './Styled';

export default class RequestCard extends Component {
  render() {
    return (
      <View>
        <Card style={styles.MainCard}>
          <Card style={styles.ProfileCard}>
            <Text>1</Text>
          </Card>
          <Card style={styles.TaskCard}>
            <Text>2</Text>
          </Card>
        </Card>
      </View>
    );
  }
}
