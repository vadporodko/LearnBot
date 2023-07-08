import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../assets/img/logo.png';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={logo} />
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: 342,
        alignSelf: 'center',
        marginTop: 70,
    },
    logo: {
        width: 207,
        height: 52,
    },
});
