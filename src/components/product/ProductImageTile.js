import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const ProductImageTile = ({ product }) => {
    return (
        <ImageBackground source={{ uri: product.images[0].original }} style={styles.imageContainer}>
            <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                <View style={{ backgroundColor: colors.wildSand, flexDirection: 'row', justifyContent: 'space-between', padding: 4, alignItems: 'center', }}>
                    <View style={{ flex: 1, margin: 4 }}>
                        <Text style={styles.textStyle}>Price: {product.price}$</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        resizeMode: 'center'
    },
    textStyle: {
        color: colors.mirageBlue,
        fontSize: 12
    }
})

export default ProductImageTile;