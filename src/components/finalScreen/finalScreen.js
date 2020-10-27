import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import RequestItemStyles from '../../styles/RequestItemStyles'

const finalScreen = ({ navigation }) => {

    return (
            <>
            <StatusBar translucent={true} backgroundColor={'#0000'} barStyle="dark-content" />
            <Image style={RequestItemStyles.final} source={require('../../assets/splash.jpg')}/>
            </>
        );
    };

export default finalScreen;
