import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b16A',
    },
    columns: {
        flexDirection: 'row'
    },
    containerLeft: {
        flex: 1,
        backgroundColor: '#00b16A',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    containerRigth: {
        flex: 1,
        backgroundColor: '#00b16A',
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    buttonContainer2: {
        backgroundColor: '#28323A',
        paddingVertical: 30,
        paddingHorizontal: 15,
        //marginVertical: 30,
        marginHorizontal: 50,
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText2: {
        textAlign: 'center',
        color: '#f7f7f8',
        fontWeight: '700',
        marginTop: 50,
        fontSize: 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#f7f7f8',
        fontWeight: '700',
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#28323A',
        paddingVertical: 15,
        marginTop: 70,
        marginHorizontal: 50,
        borderRadius: 10
    },
})