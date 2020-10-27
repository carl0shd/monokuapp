import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';
import chooseItems from '../../styles/chooseItems'

const Router = () => {

    const { state, actions } = useContext(Context)

    const [copyDisplay, setcopyDisplay] = useState('Escoge una de nuestras prendas únicas.');
    const [productSet, setproductSet] = useState(false);
    const [productSelected, setproductSelected] = useState(false);

    useEffect(() => {
        axios.get(`${api.uri}/stands/${state.StandUUID}`)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {});

        axios.get(`${api.uri}/productos/?stand=${state.StandUUID}`)
        .then(function (response) {
            console.log("Productos", response.data)
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

    return (
            <>
            <StatusBar translucent={true} backgroundColor={'#0000'} barStyle="dark-content" />
            <View style={chooseItems.containerHome}>
                <View style={chooseItems.containerText}>
                    <Text style={chooseItems.textTop}>Felicitaciones!</Text>
                    <Text style={chooseItems.textCopy}>{copyDisplay}</Text>
                </View>
                <View style={chooseItems.productList}>
                <TouchableOpacity onPress={() => setProduct('8d2ae58c-a6aa-488b-a069-9a8edd47c61c')} style={chooseItems.product} activeOpacity={1}>
                        <View style={chooseItems.productInside}>
                            <Image style={productSelected === '8d2ae58c-a6aa-488b-a069-9a8edd47c61c' ? chooseItems.productImgSelected : chooseItems.productImg} source={{uri: 'https://prueba-monoku-2020.s3.amazonaws.com/media/camiseta_logo_monoku.jpg'}}/>
                            {
                                productSelected === '8d2ae58c-a6aa-488b-a069-9a8edd47c61c' ?
                                <Image style={chooseItems.markItem} source={require('../../assets/mark.png')}/>
                                :
                                null
                            }
                            <Text style={chooseItems.productText}>Gorra Gris</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setProduct('8d2ae58c-a6aa-488b-a069-9a8edd47c61')} style={chooseItems.product} activeOpacity={1}>
                        <View style={chooseItems.productInside}>
                            <Image style={productSelected === '8d2ae58c-a6aa-488b-a069-9a8edd47c61' ? chooseItems.productImgSelected : chooseItems.productImg} source={{uri: 'https://prueba-monoku-2020.s3.amazonaws.com/media/camiseta_logo_monoku.jpg'}}/>
                            {
                                productSelected === '8d2ae58c-a6aa-488b-a069-9a8edd47c61' ?
                                <Image style={chooseItems.markItem} source={require('../../assets/mark.png')}/>
                                :
                                null
                            }
                            <Text style={chooseItems.productText}>Gorra Gris</Text>
                        </View>
                </TouchableOpacity>
                </View>
                <View style={chooseItems.buttoms}>
                    <TouchableOpacity /* onPress={() => sendForm()} */ style={chooseItems.buttomBack} title="Atras">
                        <Text style={chooseItems.textButtom}>Atrás</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    };

export default Router;
