import React from 'react';
import { Text, View, ScrollView, TouchableOpacity ,Image } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
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
                            <Text style={styles.name}>Daniel Escobar</Text>
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
                        <SwitchSpace textSwitchOn={'Renovación de suscripción activada'} textSwitchOff={'Renovación de suscripción desactivada'} />
                        <View style={styles.acount}>
                            <Text style={styles.text, styles.count}>
                                Cuenta para depositos
                            </Text>
                            <Text style={styles.text}>
                                XXXX-XXXX-XXXX-XXXX-7890
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            //onPress={this.nextScreen}
                            >
                            <Text style={styles.buttonText}>Guardar cambios</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.contName}>
                            <View style={styles.icName}>
                                <Icon name="md-cloud-upload" size={80} color={ICON_COLOR} />
                            </View>
                            <Text style={styles.name}>¿Tienes un nuevo certificado o documento para compartir?</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )           
    }
}