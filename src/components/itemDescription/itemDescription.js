import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';
import itemSelectorStyles from '../../styles/itemDescriptionStyles'
import { CommonActions } from '@react-navigation/native';


const itemDescription = ({ navigation }) => {

    const { state, actions } = useContext(Context)

    const [size, setsize] = useState(false);
    const [status, setstatus] = useState(false);
    const [options, setoptions] = useState([]);

    useEffect(() => {
        axios.get(`${api.uri}/opciones-producto/?producto=${state.product.id}`)
        .then(function (response) {
            if (response.status === 200) {
                setoptions(response.data);
                actions({ type: "setState", payload: { ...state, id: response.data[0].id } })
            }
        })
        .catch(function (error) {});
    }, [])

    const changeScreen = async (screen) => {
        let json = {
            "nombre": size.nombre,
            "slug": size.slug,
            "orden": size.orden,
            "producto": size.producto
        }
        await actions({ type: "setState", payload: { ...state, option: json } })
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                { name: screen }
                ],
            })
        )
    }

    const selectSize = (size) => {
        setsize(size);
        setstatus(true);
    }

    return (
            <>
            <StatusBar translucent={true} backgroundColor={'#eaeaea'} barStyle="dark-content" />
            <View style={itemSelectorStyles.body}>
                <View>
                    <Image style={itemSelectorStyles.productImg} source={{uri: state.product.image}}/>
                    <Text style={itemSelectorStyles.productText}>{state.product.nombre}</Text>
                </View>
                <View>
                    <Text style={itemSelectorStyles.copyText}>Escogiste algo increíble!</Text>
                </View>
                <View>
                    <Text style={itemSelectorStyles.selectorText}>Ahora, selecciona una opción.</Text>
                </View>
                <SafeAreaView style={itemSelectorStyles.sizesMaster}>
                    <ScrollView showsVerticalScrollIndicator={false} style={itemSelectorStyles.scrollSizes}>
                        {
                            options.length > 0 ?
                            options.map((option, id) => {
                                return(
                                    <TouchableOpacity key={id} onPress={() => selectSize(option)}>
                                        <View style={itemSelectorStyles.sizeContainer}>
                                            <Text style={itemSelectorStyles. sizeText}>{option.nombre}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            :
                            <ActivityIndicator size="large" color="#5c359a" />
                        }
                    </ScrollView>
                </SafeAreaView>
                <View style={itemSelectorStyles.buttoms}>
                    {!status ? 
                        <TouchableOpacity style={itemSelectorStyles.buttomNextDisabled} title="Siguiente">
                            <Text style={itemSelectorStyles.textNextButtom}>Siguiente</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => changeScreen('requestItem')} style={itemSelectorStyles.buttomNext} title="Siguiente">
                            <Text style={itemSelectorStyles.textNextButtom}>Siguiente</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => changeScreen('chooseItemStand')} style={itemSelectorStyles.buttomBack} title="Atras">
                        <Text style={itemSelectorStyles.textButtom}>Atrás</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    };

export default itemDescription;
