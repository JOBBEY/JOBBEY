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
          title='Afinación de violin'
          price='70.000'
          info={['Limpieza de cerdas de caballo', 'Afinación de cuerdas']}
          name='Jorge Camargo' />
        <HistoryCard
          title='Clases de violín'
          price='40.000'
          info={['¿Cómo leer partituras?', 'Tocar las notas en el violín']}
          name='Eduardo Herrera' />
      </ScrollView>
    </View>
  )
}

export default History