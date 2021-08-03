import React, {useEffect} from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';

// Components.
// Store.
// Styles.
import { colors } from '../styles/colors';
// Utils.
import { TOP_PADDING_ANDROID, TOP_PADDING_IOS, TOP_PADDING_NOTCH } from '../styles/constants';

const ScreenWithTitleBar = ({title = "Default Title",screenContent, backButton}) => {
    return (
            <SafeAreaProvider>
                <View style={styles.screenContainer}>
                    <AppTitleBar title={title} backButton={backButton} />
                    <View style={styles.overlay}>
                        <View style={{ flex: 1, padding: 16 }}>
                            {screenContent}
                        </View>
                    </View>
                </View>
            </SafeAreaProvider>
    );
}

const AppTitleBar = ({ backButton, title, }) => {
    let iosDevice = Platform.OS == 'ios';
    let hasNotch = DeviceInfo.hasNotch();

    let TOP_PADDING = hasNotch ? TOP_PADDING_NOTCH :
        iosDevice ? TOP_PADDING_IOS : TOP_PADDING_ANDROID;
    
    return <View style={[styles.titleBarContainer,{paddingTop: TOP_PADDING, height: 65 + TOP_PADDING}]}>
        <View style={{ width: 80 }}>
            {backButton}
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleTextStyle}>{title}</Text>
        </View>
        <View style={{ width: 80 }} />
    </View>

}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.backgroundImageOverlay,
        resizeMode: 'contain'
    },
    titleRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24
    },
    titleTextStyle: {
        fontSize: 18,
        color: colors.mirageBlue,
        fontWeight: 'bold'
    },
    overlay: {
        padding: 16,
        paddingBottom: 0,
        flex: 1,
        backgroundColor: colors.backgroundImageOverlay
    },
    subtitleTextStyle: {
        fontSize: 12,
        color: colors.valenciaRed
    },
    titleBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 80,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})



export default ScreenWithTitleBar;