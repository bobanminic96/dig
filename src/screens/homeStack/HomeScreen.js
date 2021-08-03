import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_PRODUCTS_SAGA } from '../../store/sagas/productsSaga';
// Components.
// Store.
// Styles.
// Utils.

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: FETCH_PRODUCTS_SAGA});
    }, [])


    return (
        <View><Text>This is HomeScreen</Text></View>
    )
}

export default HomeScreen;