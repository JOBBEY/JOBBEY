import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    BodySettings: {
        flex: 1,
        backgroundColor: '#00b16A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexGrow: 1,
        margin: 15,
        borderRadius: 20,
        paddingBottom: 20,
    },
    contName:{
        flexDirection: 'row',
        paddingTop: 20,
    },
    name: {
        color: '#28323A',
        fontSize: 20,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icName: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSwitch: {
        flexDirection: 'row',
        margin: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    switch: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
        margin: 3,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    textSwitch: {
        color: '#28323A',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    acount:{
        flexDirection: 'row',
        paddingBottom: 20,
    },
    count:{
        width: '30%',
        color: '#28323A',
    },
    text: {
        color: '#28323A',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 15,
        width: '60%',
    },
    buttonContainer: {
        backgroundColor: '#28323A',
        paddingVertical: 15,
        width: '70%',
        borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#f7f7f8',
        fontWeight: '700'
    },
})