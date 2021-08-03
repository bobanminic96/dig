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
import CommentInputField from '../../components/common/CommentInputField';
// Utils.

const AddCommentScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    let product = useSelector((state) => state.productsReducer.activeProduct);
    const [commentInput, setCommentInput] = useState("")

    return (
        <ScreenWithTitleBar
            backButton={<BackButton navigation={navigation} />}
            title={'Add comment'}
            screenContent={
                <>
                    <Text style={{color: colors.white}}>Add comment for product:</Text>
                    <Text style={{color: colors.appleGreen, fontSize: 16}}>{product.title}</Text>
                    <CommentInputField
                        state={commentInput}
                        setState={setCommentInput}
                        placeHolder={"Please add comment"}
                        height={200}
                    />
                </>
            }
        />
    )
}

const styles = StyleSheet.create({
    
})


export default AddCommentScreen;