import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
import CollapsibleRow from '../../components/common/CollapsibleRow';
import BackButton from '../../components/common/BackButton';
import LoadingIndicator from '../../components/common/LoadingIndicator';
// Store.
// Styles.
import { colors } from '../../styles/colors';
import { FETCH_PRODUCT_COMMENTS_SAGA } from '../../store/sagas/productsSaga';
import { ADD_COMMENT_SCREEN } from '../../navigation/navConstants';
import CommentsList from '../../components/product/CommentsList';
// Utils.

const ProductScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    let product = useSelector((state) => state.productsReducer.activeProduct);
    let comments = useSelector((state) => state.productsReducer.activeProductComments);
    let commentsLoading = useSelector((state) => state.loadReducer.comments);

    return (
        <ScreenWithTitleBar
            backButton={<BackButton navigation={navigation} />}
            title={product.title}
            screenContent={
                <>
                    <Image source={{ uri: product.images[0].original }} style={styles.imageContainer} resizeMode='center' />
                    <Text style={{ color: colors.white, marginVertical: 10, fontWeight: 'bold' }}>Price: {product.price}$</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <>
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
                                    onRender={() => {
                                        dispatch({ type: FETCH_PRODUCT_COMMENTS_SAGA, productId: product.id });
                                    }}
                                    title={"Comments:"}
                                    content={
                                        <>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' , marginVertical: 8}}>
                                                <TouchableOpacity onPress={() => { navigation.navigate(ADD_COMMENT_SCREEN) }} ><Text style={styles.addCommentButtonStyle}>Add comment</Text></TouchableOpacity>
                                            </View>
                                            <CommentsList />
                                        </>
                                    } />
                            </>
                        }

                    />
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
    contentTitleText: { fontWeight: 'bold', marginBottom: 4 },
    addCommentButtonStyle: { color: colors.appleGreen,borderColor: colors.appleGreen, borderWidth: 2, padding: 6, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }
})


export default ProductScreen;