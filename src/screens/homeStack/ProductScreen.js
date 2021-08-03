import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/common/BackButton';
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
// Components.
// Store.
// Styles.
// Utils.

const ProductScreen = ({navigation}) => {
    return (
        <ScreenWithTitleBar
            backButton={<BackButton navigation={navigation}/>}
            title={"Products Screen"}
            screenContent={
                <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
            }
        />
    )
}

export default ProductScreen;