import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';
import chooseItems from '../../styles/chooseItems'
import { CommonActions } from '@react-navigation/native';


const Router = ({ navigation }) => {

    const { state, actions } = useContext(Context)

    const [copyDisplay, setcopyDisplay] = useState('Escoge una de nuestras prendas únicas.');
    const [productSet, setproductSet] = useState(false);
    const [productSelected, setproductSelected] = useState(false);
    const [productList, setproductList] = useState([]);


    useEffect(() => {
        axios.get(`${api.uri}/productos/?stand=${state.StandUUID}`)
        .then(function (response) {
            if (response.status === 200) {
                setproductList(response.data);
            }
        })
        .catch(function (error) {});
    }, [])


    const setProduct = (uuidItem) => {
        if (!productSet || productSelected !== uuidItem) {
            setcopyDisplay('Escoge uno de nuestros diseños originales.');
            setproductSelected(uuidItem);
            setproductSet(true);
        }
        else{
            setcopyDisplay('Escoge una de nuestras prendas únicas.');
            setproductSelected(false);
            setproductSet(false);
        };
    }

    const goBack = (screen) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                { name: screen }
                ],
            })
        )
    }

    return (
            <>
            <StatusBar translucent={true} backgroundColor={'#0000'} barStyle="dark-content" />
            <View style={chooseItems.containerHome}>
                <View style={chooseItems.containerText}>
                    <Text style={chooseItems.textTop}>Felicitaciones!</Text>
                    <Text style={chooseItems.textCopy}>{copyDisplay}</Text>
                </View>
                <View style={chooseItems.productList}>
                {
                    productList.length > 0 ?
                    productList.map(product => {
                        return(
                            <TouchableOpacity key={product.id} onPress={() => setProduct(product.id)} style={chooseItems.product} activeOpacity={1}>
                                    <View style={chooseItems.productInside}>
                                        <Image style={productSelected === product.id ? chooseItems.productImgSelected : chooseItems.productImg} source={{uri: product.image}}/>
                                        {
                                            productSelected === product.id ?
                                            <Image style={chooseItems.markItem} source={require('../../assets/mark.png')}/>
                                            :
                                            null
                                        }
                                        <Text style={chooseItems.productText}>{product.nombre}</Text>
                                    </View>
                            </TouchableOpacity>
                        )
                    })
                    :
                    <ActivityIndicator size="large" color="#5c359a" />
                }
                </View>
                <View style={chooseItems.buttoms}>
                    <TouchableOpacity onPress={() => goBack('standsSelector')} style={chooseItems.buttomBack} title="Atras">
                        <Text style={chooseItems.textButtom}>Atrás</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    };

export default Router;
