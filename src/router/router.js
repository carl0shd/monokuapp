import React, { useContext } from 'react';
import Context from '../globalState/context'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Importing Screens

import standsSelector from '../components/standsSelector/standsSelector';
import chooseItems from '../components/chooseItems/chooseItems';
import itemDescription from '../components/itemDescription/itemDescription';
import requestItem from '../components/requestItem/requestItem';
import finalScreen from '../components/finalScreen/finalScreen';


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
                    <Stack.Screen name="itemDescription" component={itemDescription} />
                    <Stack.Screen name="requestItem" component={requestItem} />
                    <Stack.Screen name="finalScreen" component={finalScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            </>
        );
    };

export default Router;
