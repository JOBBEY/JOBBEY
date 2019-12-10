import React from 'react';
import { Text, View, ScrollView, TouchableOpacity ,Image } from 'react-native';
import NavigationBar from '../NavBar/NavBarUser';
import styles from './Styled';
import SwitchSpace from './SwitchSpace';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Settings extends React.Component {
  render(){
    const ICON_SIZE = 20;
    const ICON_COLOR = '#28323A';
    return (
        <View style={styles.BodySettings}>
            <NavigationBar />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.contName}>
                        <Text style={styles.name}>Jorge Camargo</Text>
                        <View style={styles.icName}>
                            <Icon name="md-create" size={ICON_SIZE} color={ICON_COLOR} />
                        </View>
                    </View>
                    <View style={styles.contName}>
                        <Text style={styles.name}>Descripción de perfil</Text>
                        <View style={styles.icName}>
                            <Icon name="md-create" size={ICON_SIZE} color={ICON_COLOR} />
                        </View>
                    </View>
                    <SwitchSpace textSwitchOn={'Autenticacion de dos pasos activada'} textSwitchOff={'Autenticacion de dos pasos desactivada'} /> 
                    <View style={styles.acount}>
                        <Text style={styles.text, styles.count}>
                            Tarjeta vinculada
                        </Text>
                        <Text style={styles.text}>
                            XXXX-XXXX-XXXX-XXXX-7890
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContainerCard}
                        //onPress={this.nextScreen}
                        >
                        <Text style={styles.buttonText}>Agregar tarjeta</Text>
                        <View style={styles.icName}>
                            <Icon name="md-add" size={ICON_SIZE} color={'white'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        //onPress={this.nextScreen}
                        >
                        <Text style={styles.buttonText}>Guardar cambios</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
      )           
    }
  }