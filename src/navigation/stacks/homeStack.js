import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens.
import HomeScreen from '../../screens/homeStack/HomeScreen';
import ProductScreen from '../../screens/homeStack/ProductScreen';
// Utils.
import { ADD_COMMENT_SCREEN, HOME_SCREEN, PRODUCT_SCREEN } from '../navConstants';
import AddCommentScreen from '../../screens/homeStack/AddCommentScreen';


const HomeStack = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}} >
            <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen}/>
            <HomeStack.Screen name={PRODUCT_SCREEN} component={ProductScreen}/>
            <HomeStack.Screen name={ADD_COMMENT_SCREEN} component={AddCommentScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStack;