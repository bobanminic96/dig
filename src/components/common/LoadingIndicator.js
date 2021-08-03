import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// Styles.
import { colors } from '../../styles/colors';

const LoadingIndicator = ({ size = 'large', text = "Loading ...", color = colors.white}) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
                animating={true}
                color={color}
                size={size}
            />
            <Text style={[styles.textStyle, {color: color}]}>{text}</Text>
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