import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {

    return (
        <View style={styles.footer}>
            <Text style={styles.name}>Created by Vadim Porodko</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    footer: {
        marginHorizontal: 'auto',
        marginTop: 20,
        maxWidth: 425,
        marginBottom: 64,
        height: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'Gilroy-Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
        margin: 0,
        zIndex: -1,
    },
});
