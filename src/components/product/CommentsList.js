import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../common/LoadingIndicator';
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const CommentsList = ({ }) => {
    let comments = useSelector((state) => state.productsReducer.activeProductComments);
    let commentsLoading = useSelector((state) => state.loadReducer.comments);

    return (
        <>
            {commentsLoading && <LoadingIndicator text="Loading comments ..." color={colors.valenciaRed} />}
            {!commentsLoading && comments.length === 0 && <Text>No comments for this product ...</Text>}
            {!commentsLoading &&
                <FlatList
                    data={comments}
                    renderItem={({ item, index }) => <CommentListItem comment={item.comment}/>}
                    keyExtractor={(item, index) => {
                        return "CM" + index;
                    }}
                />
            }
        </>
    )
}

const CommentListItem = ({comment}) => {
    return <View style={styles.listItemContainer}>
        <Text style={{color: colors.white}}>{comment}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItemContainer:{width: '100%', backgroundColor: colors.cranberryRed, padding: 6, marginVertical:4, borderRadius: 4}
})

export default CommentsList;