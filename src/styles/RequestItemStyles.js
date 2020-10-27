import { StyleSheet } from 'react-native';


const itemSelector = StyleSheet.create({

    body: {
        backgroundColor: '#eaeaea',
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingTop: 100,
        alignItems: 'center',
        position: 'relative'
    },
    productImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 15
    },
    productBig: {
        width: 250,
        height: 250,
        borderRadius: 1500,
        marginBottom: 15
    },
    productText: {
        color: '#000',
        textAlign: 'center'
    },
    copyText: {
        fontSize: 35,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        paddingTop: 25,
        color: '#5c339a',
        marginBottom: 15
    },
    selectorText: {
        fontSize: 17
    },
    sizeContainer: {
        backgroundColor: 'white',
        width: '100%',
        padding: 17,
        marginBottom: 10
    },
    sizesMaster: {
        width: '100%',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 20
    },
    sizeText: {
        fontSize: 17
    },
    scrollSizes: {
        height: 250
    },
    buttoms: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        backgroundColor: 'white',
    },
    buttomBack: {
        backgroundColor: '#eeeff1',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomNext: {
        backgroundColor: '#522d8b',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    buttomNextDisabled: {
        backgroundColor: '#8b8b8b',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    textButtom: {
        fontSize: 18
    },
    textNextButtom: {
        fontSize: 18,
        color: 'white'
    },
    productReady: {
        fontSize: 20,
        color: '#000'
    },
    productImgBig: {
        width: '100%',
        height: 470,
        justifyContent: 'center',
        alignItems: 'center'
    },
    final: {
        width: '100%',
        height: '100%'
    }

});

export default itemSelector