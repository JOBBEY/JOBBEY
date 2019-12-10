import React, { Component } from 'react'
import {
    PricingCard
} from 'react-native-elements';
import styles from './Styled'

export default class HistoryCard extends Component {
    render() {
        return ( 
            < PricingCard
            containerStyle = {
                styles.Card
            }
            color = "#28323A"
            title = {this.props.title}
            price = {'$' + this.props.price}
            info = {this.props.info}
            button = {
                {
                    title: 'Cliente: ' + this.props.name,
                    icon: 'history'
                }
            }
            />
        )
    }
}
