import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const ProductImageTile = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image  source={{uri: product.images[0].original}} style={styles.imgStyle} resizeMode='center'/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: colors.white
    },
    imgStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
})

export default ProductImageTile;