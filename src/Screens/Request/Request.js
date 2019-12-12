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
        <RequestCard
          tasks={[
            'Cambiar aceite al carro',
            'Revisar líquido de frenos',
            'Ajustar tornillos',
            'Sonidos extraños en el motor',
          ]}
          name="Daniel Escobar"
          score="4.56"
          requestType="Mecánica (automóvil)"
          money="50.000"
        />
        <RequestCard
          tasks={['Redactar derecho de petición', 'Asesoría ante tutela']}
          name="Daniel Escobar"
          score="4.99"
          requestType="Asesoría Jurídica"
          money="40.000"
        />
        <RequestCard
          tasks={[
            'Arreglar grifo de la cocina',
            'Cambiar bombillo',
            'Instalar ducha',
            'Cambiar tomacorriente',
          ]}
          name="David Cooper"
          score="3.72"
          requestType="Plomería"
          money="20.000"
        />
        <RequestCard
          tasks={[
            'Formatear computador',
            'Instalar windows y linux',
            'Instalar drivers',
          ]}
          name="Daniel Escobar"
          score="5.00"
          requestType="Computación"
          money="50.000"
        />
      </ScrollView>
    </View>
  );
}

export default Request