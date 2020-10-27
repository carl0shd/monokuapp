import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';
import chooseItemsStyles from '../../styles/chooseItemsStyles'
import { CommonActions } from '@react-navigation/native';


const ChooseItems = ({ navigation }) => {

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


    const setProduct = async (uuidItem, item) => {
        if (!productSet || productSelected !== uuidItem) {
            setcopyDisplay('Escoge uno de nuestros diseños originales.');
            setproductSelected(uuidItem);
            setproductSet(true);
            await actions({ type: "setState", payload: { ...state, product: item } })
            setTimeout(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                        { name: 'itemDescription' }
                        ],
                    })
                )
            }, 2000);
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
            <View style={chooseItemsStyles.containerHome}>
                <View style={chooseItemsStyles.containerText}>
                    <Text style={chooseItemsStyles.textTop}>Felicitaciones!</Text>
                    <Text style={chooseItemsStyles.textCopy}>{copyDisplay}</Text>
                </View>
                <View style={chooseItemsStyles.productList}>
                {
                    productList.length > 0 ?
                    productList.map(product => {
                        return(
                            <TouchableOpacity key={product.id} onPress={() => setProduct(product.id, product)} style={chooseItemsStyles.product} activeOpacity={1}>
                                    <View style={chooseItemsStyles.productInside}>
                                        <Image style={productSelected === product.id ? chooseItemsStyles.productImgSelected : chooseItemsStyles.productImg} source={{uri: product.image}}/>
                                        {
                                            productSelected === product.id ?
                                            <Image style={chooseItemsStyles.markItem} source={require('../../assets/mark.png')}/>
                                            :
                                            null
                                        }
                                        <Text style={chooseItemsStyles.productText}>{product.nombre}</Text>
                                    </View>
                            </TouchableOpacity>
                        )
                    })
                    :
                    <ActivityIndicator size="large" color="#5c359a" />
                }
                </View>
                <View style={chooseItemsStyles.buttoms}>
                    <TouchableOpacity onPress={() => goBack('standsSelector')} style={chooseItemsStyles.buttomBack} title="Atras">
                        <Text style={chooseItemsStyles.textButtom}>Atrás</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    };

export default ChooseItems;
