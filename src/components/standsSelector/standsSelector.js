import React, { useContext } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import Context from '../../globalState/context';
import axios from 'axios';
import api from '../../api.json';


const standsSelector = ({ navigation }) => {

    const { state, actions } = useContext(Context)

    const changeScreen = async (uuid) => {
        axios.get(`${api.uri}/stands/${uuid}`)
        .then(async function (response) {
            if (response.status === 200) {
                await actions({ type: "setState", payload: { ...state, StandUUID: response.data.id } })
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                        { name: "chooseItemStand" }
                        ],
                    })
                )
            }
        })
        .catch(function (error) {});
    }

    return(
        <>
            <StatusBar translucent={false} backgroundColor={'#00000030'} barStyle="light-content" />
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                <TouchableOpacity onPress={() => changeScreen('93e270b3-f492-493c-b0d2-96e207d77490')} title="Stand1">
                    <Text style={{fontSize: 30, marginBottom: 30}}>Stand 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeScreen('e61cda92-083c-49e8-9878-a008164830fb')} title="Stand2">
                    <Text style={{fontSize: 30, marginBottom: 30}}>Stand 2</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}



export default standsSelector
