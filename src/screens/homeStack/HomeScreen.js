import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ProductPreviewCard from '../../components/product/ProductPreviewCard';
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
// Store.
import { FETCH_PRODUCTS_SAGA } from '../../store/sagas/productsSaga';
// Styles.
// Utils.

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const loadingProducts = useSelector((state) => state.loadReducer.products);
    const products = useSelector((state) => state.productsReducer.products);

    useEffect(() => {
        dispatch({type: FETCH_PRODUCTS_SAGA});
    }, [])


    return (
        <ScreenWithTitleBar
            title={"Products"}
            screenContent={
                <View style={{flex: 1}}>
                    {loadingProducts && <LoadingIndicator text="Loading products ..."/>}
                    {!loadingProducts && 
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={products}
                            renderItem={({item,index}) => <ProductPreviewCard product={item} navigation={navigation}/>}
                            keyExtractor={(item,index) => {
                                return "PR" + index;
                            }}
                        /> }
                </View>
            }
        />
    )
}

export default HomeScreen;