import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationService from './NavigationService'
import React, { Component } from 'react';
import Login from '../src/Screens/Login/Login';
import SelectRol from '../src/Screens/SelectRol/SelectRol';
import Categories from '../src/Screens/Categories/Categories';
import Rate from '../src/Screens/Rate/Rate';
import UserProfile from '../src/Screens/UserProfile/UserProfile'
import JobbeyProfile from '../src/Screens/JobbeyProfile/JobbeyProfile'

const routeConfig = {
    Login: {
        screen: Login,
        path: "Login"
    },
    SelectRol:{
        screen: SelectRol,
        path: "SelectRol"
    },
    Categories:{
        screen: Categories,
        path: "Categories"
    },
    UserProfile:{
        screen: UserProfile,
        path: "UserProfile"
    },
    JobbeyProfile:{
        screen: JobbeyProfile,
        path: "JobbeyProfile"
    },
    Rate:{
        screen: Rate,
        path: "Rate"
    }
};
const navigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: "none",
    statusBarStyle: "light-content"
};
const RootStackNavigator = createStackNavigator(
    routeConfig,
    navigatorConfig
    );
    
const NavAppContainer = createAppContainer(RootStackNavigator);

export default class Nav extends Component {
    render() {
        return (
            <NavAppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef)
            }} />
        )
    }
}
