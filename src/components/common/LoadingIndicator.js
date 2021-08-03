import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// Styles.
import { colors } from '../../styles/colors';

const LoadingIndicator = ({ size = 'large', text = "Loading ..." }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
                animating={true}
                color={colors.white}
                size={size}
            />
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    )
};

export default LoadingIndicator;

const styles = StyleSheet.create({
    textStyle: {
        color: colors.white,
        fontSize: 12,
    }
})