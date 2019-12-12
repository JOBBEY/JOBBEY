import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import HistoryCard from './HistoryCardJB'
import styles from './Styled';

const History = (props) => {
  
  return (
    <View style={styles.BodyHistory}>
      <NavigationBar />
      <ScrollView>
        <HistoryCard
          title='Instalar Windows'
          price='70.000'
          info={['Formatear PC', 'Instalar Sistema Operativo']}
          name='Eduardo Herrera' />
        <HistoryCard
          title='Reparar PC'
          price='40.000'
          info={['Mi PC no enciende', 'Revisar cargador']}
          name='Jorge Camargo' />
        <HistoryCard
          title='Asesoría para comprar un nuevo PC'
          price='50.000'
          info={['Asesorar para la compra', 'Ir al centro de compra']}
          name='Jorge Camargo' />
      </ScrollView>
    </View>
  )
}

export default History