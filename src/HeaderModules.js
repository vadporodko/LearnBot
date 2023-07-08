import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/img/logo-mini.png';
import backplay from '../assets/img/buttonback.png';
import { useNavigation } from '@react-navigation/native';

function HeaderModules() {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackButton}>
                <Image style={styles.backButton} source={backplay} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                    <Image style={styles.logo} source={logo} />
                </TouchableOpacity>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        maxWidth: 342,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 70,
        marginBottom: 30,
    },
    backButton: {
        width: 15,
        height: 15,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
    },
});

export default HeaderModules;
