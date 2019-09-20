import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b16A'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#28323A',
        marginTop: 10,
        opacity: 0.6
    },
    containerForm: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#28323A'
    },
    buttonContainer: {
        backgroundColor: '#28323A',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#f7f7f8',
        fontWeight: '700'
    }
})