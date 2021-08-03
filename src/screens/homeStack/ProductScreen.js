import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
import CollapsibleRow from '../../components/common/CollapsibleRow';
import BackButton from '../../components/common/BackButton';
// Store.
// Styles.
import { colors } from '../../styles/colors';
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
                    <Text style={{color: colors.white, marginVertical: 10, fontWeight: 'bold'}}>Price: {product.price}$</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CollapsibleRow
                            title={"Description:"}
                            content={
                                <Text style={styles.textContent}>{product.description}</Text>
                            } />
                        <CollapsibleRow
                            title={"Specification:"}
                            content={
                                <Text style={styles.textContent}>{product.specification}</Text>
                            } />
                        <CollapsibleRow
                            title={"Comments:"}
                            content={
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={()=>{}} ><Text style={{color: colors.valenciaRed}}>Add comment</Text></TouchableOpacity>
                                </View>
                            } />
                    </ScrollView>
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