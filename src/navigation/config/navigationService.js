import * as React from 'react';
import { StackActions, TabActions } from '@react-navigation/native'

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}
  
export function push(...args) {
    navigationRef.current?.dispatch(StackActions.push(...args));
}

export function goBack(...args) {
    navigationRef.current?.dispatch(StackActions.pop(...args));
}

export function resetToScreen(...args) {
    navigationRef.current?.reset({
        index: 0,
        routes: [...args],
    })
};

export function resetToScreenAtIndex(index, routes) {
    navigationRef.current?.reset({
        index: index,
        routes: routes,
    })
};

export function getCurrentRoute() {
    return navigationRef.current.getCurrentRoute();
}