import { StyleSheet } from 'react-native';


const chooseItems = StyleSheet.create({

    containerHome: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingTop: 100,
        alignItems: 'center',
        position: 'relative'
    },
    textTop: {
        fontSize: 35,
        color: '#5c359a',
        marginBottom: 25
    },
    textCopy: {
        fontSize: 20,
        color: '#000',
        paddingLeft: 60,
        paddingRight: 60,
        textAlign: 'center'
    },
    containerText: {
        display: 'flex',
        alignItems: 'center',
    },
    productImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10
    },
    productImgSelected: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#5c359a',
        position: 'relative'
    },
    markItem: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: -5
    },
    productText: {
        fontSize: 15
        
    },
    productList: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 0,
        flexWrap: 'wrap',
        paddingLeft: 20,
        paddingRight: 20
    },
    product: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        flexBasis: '50%',
        marginBottom: 25,
    },
    productInside: {
        display: 'flex',
        alignItems: 'center'
    },
    buttoms: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 25
    },
    buttomBack: {
        backgroundColor: '#eeeff1',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtom: {
        fontSize: 18
    }

});

export default chooseItems