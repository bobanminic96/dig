import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ProductImageTile from './ProductImageTile';
// Store.
import { SET_ACTIVE_PRODUCT } from '../../store/reducers/productsReducer';
// Styles.
import { colors } from '../../styles/colors';
// Utils.
import { PRODUCT_SCREEN } from '../../navigation/navConstants';


const ProductPreviewCard = ({ product, navigation }) => {
    const dispatch = useDispatch();

    const onPress = async () => {
        dispatch({ type: SET_ACTIVE_PRODUCT, payload: product });
        navigation.navigate(PRODUCT_SCREEN);
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer} activeOpacity={0.95}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleTextStyle}>{product.title}</Text>
                <Text numberOfLines={3} style={styles.descriptionTextStyle}>{product.description}</Text>
                <Text style={styles.priceTextStyle}>Price: {product.price}$</Text>
            </View>
            <ProductImageTile product={product} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.mirageBlue,
        marginBottom: 16,
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        paddingRight: 8,
        justifyContent: 'space-between'
    },
    titleTextStyle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    descriptionTextStyle: {
        color: colors.white,
        fontSize: 12,
        fontStyle: 'italic',

    },
    priceTextStyle: {
        color: colors.white,
        fontSize: 14
    }
})
export default ProductPreviewCard;