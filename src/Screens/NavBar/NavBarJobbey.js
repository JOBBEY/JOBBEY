import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../../../Navigation/NavigationService';
import styles from './Styled';

const Menu = (props) => {
  nextScreenRequest = () => {
    NavigationService.navigate("Request");
  }
  nextScreenUser = () => {
    NavigationService.navigate("JobbeyProfile");
  }
  nextScreenHistory =() => {
    NavigationService.navigate("History");
  }
  nextScreenSettings =() => {
    NavigationService.navigate("Settings");
  }
  const ICON_SIZE = 30;
  const ICON_COLOR = 'white';
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.tab}
        onPress={this.nextScreenRequest}
        >
        <Icon name="md-globe" size={ICON_SIZE} color={ICON_COLOR}/>
        <Text
            style={styles.tabText}>
            Solicitudes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={this.nextScreenUser}
        >
        <Icon name="md-person" size={ICON_SIZE} color={ICON_COLOR}/>
        <Text style={styles.tabText}>
            Perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={this.nextScreenHistory}
        >
        <Icon name="md-time" size={ICON_SIZE} color={ICON_COLOR}/>
        <Text
            style={styles.tabText}>
            Historial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={this.nextScreenSettings}
        >
        <Icon name="md-cog" size={ICON_SIZE} color={ICON_COLOR}/>
        <Text
            style={styles.tabText}>
            Ajustes
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu