import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// Components.
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Fontisto'
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const CollapsibleRow = ({title,content}) => {
    const [collapsed, setCollapsed] = useState(true);


    return (
        <TouchableOpacity style={{width: '100%', backgroundColor: colors.white, overflow: 'hidden', borderRadius: 16, marginBottom: 8}} onPress={()=>{setCollapsed(!collapsed)}}>
            <View style={styles.titleRowContent}>
                <Text style={styles.titleTextStyle}>{title}</Text>
                {collapsed ? <Icon name="caret-right" size={14}/> : <Icon name="caret-down" size={14}/>}
            </View>
            <Collapsible collapsed={collapsed}>
                <View style={{padding: 16, paddingTop: 0}}>
                    {content}
                </View>
            </Collapsible>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titleRowContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    titleTextStyle:{
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default CollapsibleRow;