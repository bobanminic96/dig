import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// Components.
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Fontisto'
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const CollapsibleRow = ({ title, content, onRender = () => {}}) => {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        onRender();
    }, [])

    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity onPress={() => { setCollapsed(!collapsed) }} activeOpacity={1}>
                <View style={styles.titleRowContent}>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    {collapsed ? <Icon name="caret-right" size={14} /> : <Icon name="caret-down" size={14} />}
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
                <View style={styles.contentContainer}>
                    {content}
                </View>
            </Collapsible>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer:{ 
        backgroundColor: colors.white, 
        borderRadius: 16, 
        marginBottom: 8 
    },
    contentContainer:{ 
        padding: 16, 
        paddingTop: 0 
    },
    titleRowContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    titleTextStyle: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default CollapsibleRow;