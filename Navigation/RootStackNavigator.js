import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../src/components/Login/Login'
const routeConfig = {
    Login: {
        screen: Login,
        path: "Login"
    },
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

export default createAppContainer(RootStackNavigator);