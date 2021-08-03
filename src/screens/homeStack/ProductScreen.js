import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/common/BackButton';
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
import { colors } from '../../styles/colors';
// Components.
// Store.
// Styles.
// Utils.

const ProductScreen = ({ navigation }) => {
    let product = useSelector((state) => state.productsReducer.activeProduct);


    return (
        <ScreenWithTitleBar
            backButton={<BackButton navigation={navigation} />}
            title={product.title}
            screenContent={
                <>
                    <Image source={{ uri: product.images[0].original }} style={styles.imageContainer} resizeMode='center' />
                    <View style={{ flex: 1, backgroundColor: colors.white, borderRadius: 8, marginBottom: 16 }}>
                        <ScrollView style={{ flexGrow: 1, padding: 8 }}>
                            <Text style={styles.contentTitleText}>Price:</Text>
                            <Text style={styles.textContent}>{product.price}$</Text>
                            <Text style={styles.contentTitleText}>Description:</Text>
                            <Text style={styles.textContent}>{product.description}</Text>
                        </ScrollView>
                    </View>
                </>
            }
        />
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 8,
        marginBottom: 16
    },
    textContent: {
        fontSize: 16,
        color: colors.mirageBlue,
        marginBottom: 16
    },
    contentTitleText: { fontWeight: 'bold', marginBottom: 4 }
})


export default ProductScreen;