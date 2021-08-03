import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Styles.
import { colors } from '../../styles/colors';
import { BACK_BUTTON_WIDTH } from '../../styles/constants';

const SubmitButton = ({ onPress , text = "Default Sumbit Button Text" }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer} activeOpacity={0.9}>
            <Text style={{ fontSize: 14, color: colors.white }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 16,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cranberryRed,
        height: 50,
    }
})