import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import styles from './Styled'
import NavigationBar from '../NavBar/NavBarUser';


export default class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar />
                <ScrollView>
                    <Text
                        style={styles.buttonText2}>
                        Califica a tu Jobbey
                    </Text>
                    <View
                        style={styles.profile}>
                        <Text
                            style={styles.buttonText2}>
                            Juan Pérez
                        </Text>
                        <View>
                            <Image
                                style={styles.pImage}
                                source={require('../../assets/avatar.png')}/>
                        </View>
                    </View>
                    <View
                        style={styles.marco}>
                        <AirbnbRating 
                            reviews={['Terrible', 'Malo', 'Meh!', 'Bueno', 'Excelente']}
                            reviewColor='#F7F7F8'
                            selectedColor='#F7F7F8'
                            reviewSize={50}
                            style={styles.marco}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
