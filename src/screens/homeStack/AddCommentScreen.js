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
import { FETCH_PRODUCT_COMMENTS_SAGA } from '../../store/sagas/productsSaga';
// Utils.

const AddCommentScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    let product = useSelector((state) => state.productsReducer.activeProduct);

    return (
        <ScreenWithTitleBar
            backButton={<BackButton navigation={navigation} />}
            title={product.title}
            screenContent={
                <>
                    <Text>Comments</Text>
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


export default AddCommentScreen;