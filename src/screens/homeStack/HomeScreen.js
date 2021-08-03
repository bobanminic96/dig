import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWithTitleBar from '../../components/ScreenWithTitleBar';
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
        <ScreenWithTitleBar
            title={"Products"}
            screenContent={
                <View></View>
            }
        />
    )
}

export default HomeScreen;