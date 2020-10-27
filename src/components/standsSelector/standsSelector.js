import React, { useContext } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import Context from '../../globalState/context';

const standsSelector = ({ navigation }) => {

    const { state, actions } = useContext(Context)

    const changeScreen = async (uuid) => {
        await actions({ type: "setState", payload: { ...state, StandUUID: uuid } })
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                { name: "chooseItemStand" }
                ],
            })
        )
    }

    return(
        <>
            <StatusBar translucent={false} backgroundColor={'#00000030'} barStyle="light-content" />
            <TouchableOpacity onPress={() => changeScreen('93e270b3-f492-493c-b0d2-96e207d77490')} title="Stand1">
                <Text>stand1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeScreen('e61cda92-083c-49e8-9878-a008164830fb')} title="Stand2">
                <Text>stand2</Text>
            </TouchableOpacity>
        </>
    )
}



export default standsSelector
