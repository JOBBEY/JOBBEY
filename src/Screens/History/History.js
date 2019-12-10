import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationBar from '../NavBar/NavBarJobbey';
import HistoryCard from './HistoryCard'
import styles from './Styled';

const History = (props) => {
  
  return (
    <View style={styles.BodyHistory}>
      <NavigationBar />
      <ScrollView>
        <HistoryCard
          title='Computación'
          price='60.000'
          info={['Instalar de nuevo el sistema operativo', 'Instalar drivers', 'Instalar office']}
          name='Adriana Dorado' />
        <HistoryCard
          title='Limpieza'
          price='50.000'
          info={['Lavar loza', 'Limpiar ventanas', 'Organizar habitaciones', 'Lavar ropa']}
          name='Daniel Caita' />
        <HistoryCard
          title='Asesoría legal'
          price='100.000'
          info={['Redactar tutela', 'Asesoría sobre herencia']}
          name='Daniel Escobar' />
        <HistoryCard
          title='Clases de violín'
          price='40.000'
          info={['¿Cómo leer partituras?', 'Tocar las notas en el violín']}
          name='Crstian Sanabria' />
      </ScrollView>
    </View>
  )
}

export default History