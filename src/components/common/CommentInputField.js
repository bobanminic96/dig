import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../styles/colors';
// Components.
// Store.
// Styles.
// Utils.

const CommentInputField = ({ state, setState, height, placeHolder = "Default Placeholder" }) => {
    return (
        <TextInput
            onChangeText={(newValue) => {
                setState(newValue);
            }}
            value={state}
            underlineColorAndroid="transparent"
            placeholder={placeHolder}
            style={[styles.noteInputFieldStyle, { height: height }]}
            placeholderTextColor={colors.cranberryRed}
            
        />
    )
}

const styles = StyleSheet.create({
    noteInputFieldStyle: {
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlignVertical: 'top',
        padding: 16,
        marginTop: 8,
        color: colors.mirageBlue
    }
})

export default CommentInputField;