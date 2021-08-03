import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Components.
import ProductImageTile from './ProductImageTile';
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const ProductPreviewCard = ({product}) => {
    const dispatch = useDispatch();

    const onPress = async () => {
    
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer} activeOpacity={0.8}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleTextStyle}>{product.title}</Text>
                <Text style={styles.textStyle}>{product.description}</Text>
                <Text style={styles.textStyle}>{product.price}</Text>
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
    textStyle: {
        color: colors.white,
        fontSize: 10
    },
    titleTextStyle: {
        color: colors.white,
        fontSize: 14
    }
})
export default ProductPreviewCard;