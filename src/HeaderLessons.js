import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import buttonback from './img/buttonback.png';
import logo from '../assets/img/logo-mini.png';
import play from '../assets/img/play.png';

function HeaderLessons(props) {
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    };

    return (
        <>
            <View
                style={styles.headerLessons}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBackButton}>
                        <Image style={styles.backButton} source={buttonback} alt="" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                        <Image style={styles.logo} source={logo} alt="" />
                    </TouchableOpacity>
                    <View style={styles.weight}></View>
                </View>
                <TouchableOpacity style={styles.playButton} onPress={props.openModal}>
                    <Image style={styles.playIcon} source={play} alt="" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    headerLessons: {
        margin: 0,
        maxWidth: 425,
        height: 420,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url("./img/bglessons1.png")'
    },
    header: {
        width: 342,
        margin: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    backButton: {
        width: 16,
        height: 16,
    },
    logo: {
        width: 92,
    },
    weight: {
        width: 20,
    },
    playButton: {
        marginTop: 71,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    playIcon: {
        width: 102,
        height: 132,
    },
});

export default HeaderLessons;