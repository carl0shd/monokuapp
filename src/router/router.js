import React, { useContext } from 'react';
import Context from '../globalState/context'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';


// Importing Screens

import standsSelector from '../components/standsSelector/standsSelector';
import chooseItems from '../components/chooseItems/chooseItems';


const Router = () => {

    // Hooks
    const Stack = createStackNavigator();
    const { state, actions } = useContext(Context)

    return (
            <>
            <StatusBar translucent={false} backgroundColor={'#00000030'} barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="standsSelector" component={standsSelector} />
                    <Stack.Screen name="chooseItemStand" component={chooseItems} />
                </Stack.Navigator>
            </NavigationContainer>
            </>
        );
    };

export default Router;
