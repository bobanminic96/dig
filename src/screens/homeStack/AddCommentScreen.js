import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitleBar from '../../components/common/ScreenWithTitleBar';
import BackButton from '../../components/common/BackButton';
import CommentInputField from '../../components/common/CommentInputField';
import SubmitButton from '../../components/common/SubmitButton';
// Store.
// Styles.
import { colors } from '../../styles/colors';
import { ADD_PRODUCT_COMMENT_SAGA } from '../../store/sagas/productsSaga';

// Utils.

const AddCommentScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    let product = useSelector((state) => state.productsReducer.activeProduct);
    const [commentInput, setCommentInput] = useState("")

    const onSubmit = () => {
        dispatch({type: ADD_PRODUCT_COMMENT_SAGA,data: {productId: product.id, comment: commentInput}});
    }

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
                    <SubmitButton text={"Submit comment"} onPress={onSubmit}/>
                </>
            }
        />
    )
}

const styles = StyleSheet.create({
    
})


export default AddCommentScreen;