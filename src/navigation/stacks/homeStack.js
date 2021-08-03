import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens.
import HomeScreen from '../../screens/homeStack/HomeScreen';
// Utils.
import { HOME_SCREEN } from '../navConstants';

const HomeStack = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator headerMode="none" >
            <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStack;