import React, {Component} from 'react';
import {Card} from 'react-native-shadow-cards';
import { TouchableOpacity , View, Text, Image} from 'react-native';
import NavigationService from '../../../Navigation/NavigationService'
import Snackbar from 'react-native-snackbar';
import styles from './Styled';

export default class RequestCard extends Component {
  acceptRequest = () => {
    Snackbar.show({title:"Se ha enviado la notificación al usuario"})
    NavigationService.navigate("SelectRol");
  }
  render() {
    const tasks = this.props.tasks.map(function(task, i) {
        return <Text style={styles.NameText} key={i}>{task}</Text>;
    });
    return (
      <View>
        <Card style={styles.MainCard}>
          <View style={styles.FlexView}>
            <Card style={styles.ProfileCard}>
              <Text style={styles.NameText}>Usuario:</Text>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
              />
              <Text style={styles.NameText}>{this.props.name}</Text>
              <Text style={styles.NameText}>{this.props.score}</Text>
            </Card>
            <Card style={styles.TaskCard}>
              <View>
                <Text style={styles.OtherTitles1}>Tipo de solicitud:</Text>
                <Text style={styles.OtherTitles2}>
                  {this.props.requestType}
                </Text>
              </View>
              <Text style={styles.TitleText}>Tareas a realziar:</Text>
              {tasks}
              <View style={{alignItems: 'center', marginVertical: 20}}>
                <Text style={styles.PriceTitle}>Remuneración:</Text>
                <Text style={styles.PriceText}>{'$' + this.props.money}</Text>
              </View>
            </Card>
          </View>
          <View style={styles.FlexView}>
            <TouchableOpacity
              style={styles.ButtonContainer}
              onPress={this.acceptRequest}>
              <Text style={styles.ButtonText}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ButtonContainer}
              onPress={this.nextScreen}>
              <Text style={styles.ButtonText}>Rechazar</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}
