import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';
import RequestItemStyles from '../../styles/RequestItemStyles'
import { CommonActions } from '@react-navigation/native';


const requestItem = ({ navigation }) => {

    const { state, actions } = useContext(Context)

    const [size, setsize] = useState(false);
    const [status, setstatus] = useState(false);
    const [options, setoptions] = useState([]);

    useEffect(() => {
        axios.get(`${api.uri}/opciones-producto/?producto=${state.product.id}`)
        .then(function (response) {
            if (response.status === 200) {
                setoptions(response.data);
            }
        })
        .catch(function (error) {});
    }, [])

    const goBack = (screen) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                { name: 'chooseItemStand' }
                ],
            })
        )
    }

    const changeScreen = (screen) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                { name: screen }
                ],
            })
        )
    }

    const requestItem = (screen) => {
        axios.post(`${api.uri}/opciones-producto/${state.id}/solicitar/`, state.option)
        .then(function (response) {
            if (response.data.status === "completed") {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                        { name: 'finalScreen' }
                        ],
                    })
                )
            }
        })
        .catch(function (error) {});
    }

    return (
            <>
            <StatusBar translucent={true} backgroundColor={'#eaeaea'} barStyle="dark-content" />
            <View style={RequestItemStyles.body}>
                <View>
                    <Text style={RequestItemStyles.copyText}>Ya casi terminas!</Text>
                </View>
                <View>
                    <Text style={RequestItemStyles.productReady}>Listx?!</Text>
                </View>
                <View style={RequestItemStyles.productImgBig}>
                    <Image style={RequestItemStyles.productBig} source={{uri: state.product.image}}/>
                </View>
                <View style={RequestItemStyles.buttoms}>
                    <TouchableOpacity onPress={() => requestItem('finalScreen')} style={RequestItemStyles.buttomNext} title="Siguiente">
                        <Text style={RequestItemStyles.textNextButtom}>Pedir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeScreen('itemDescription')} style={RequestItemStyles.buttomBack} title="Atras">
                        <Text style={RequestItemStyles.textButtom}>Atrás</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    };

export default requestItem;
