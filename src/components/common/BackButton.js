import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Styles.
import { colors } from '../../styles/colors';

const BackButton = ({ navigation }) => {
    const onPress = () => {
        navigation.pop();
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={{ fontSize: 14, color: colors.white }}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        backgroundColor: colors.cranberryRed,
        height: 30,
        marginLeft: 16
    }
})