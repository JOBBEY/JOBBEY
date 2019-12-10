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
          <PricingCard
            containerStyle ={ styles.Card }
            color = "#28323A"
            title = "Computación"
            price = "$60.000"
            info = {
              ['Instalar de nuevo el sistema operativo', 'Instalar drivers', 'Instalar office']
            }
            button = {
              {
                title: 'Tu Jobbey: Daniel Caita',
                icon: 'history'
              }
            }
          />
          <PricingCard
          containerStyle = { styles.Card }
          color = "#28323A"
          title = "Limpieza"
          price = "$50.000"
          info = {
            ['Lavar loza', 'Limpiar ventanas', 'Organizar habitaciones', 'Lavar ropa']
          }
          button = {
            {
              title: 'Tu Jobbey: Adriana Dorado',
              icon: 'history'
            }
          }
          />
          <PricingCard
          containerStyle = { styles.Card }
          color = "#28323A"
          title = "Asesoría legal"
          price = "$100.000"
          info = {
            ['Redactar tutela', 'Asesoría sobre herencia']
          }
          button = {
            {
              title: 'Tu Jobbey: Daniel Escobar',
              icon: 'history'
            }
          }
          />
          < PricingCard
          containerStyle = {
            styles.Card
          }
          color = "#28323A"
          title = "Clases de violín"
          price = "$40.000"
          info = {
            ['¿Cómo leer partituras?', 'Tocar las notas en el violín']
          }
          button = {
            {
              title: 'Tu Jobbey: Crstian Sanabria',
              icon: 'history'
            }
          }
          />
      </ScrollView>
    </View>
  )
}

export default History