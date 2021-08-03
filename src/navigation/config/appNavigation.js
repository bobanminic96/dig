import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as NavigationService from './navigationService';

// Stacks.
import HomeStack from '../stacks/homeStack';
// Utils.
import { HOME_STACK } from '../navConstants';

const AppNavigation = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer ref={NavigationService.navigationRef}>
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={HOME_STACK} component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
