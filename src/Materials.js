import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bookIcon from '../assets/img/book-icon.png';
import folderIcon from '../assets/img/folder-icon.png';

export default function Materials() {
    const navigation = useNavigation();

    const handleAdditionalFilesPress = () => {
        navigation.navigate('AdditionalFiles');
    };
    const handlePresentationsPress = () => {
        navigation.navigate('Presentations');
    };
    return (
        <View style={styles.materials}>
            <Text style={styles.title}>materials</Text>
            <View style={styles.cards}>
                <TouchableOpacity style={styles.card} onPress={handlePresentationsPress}>
                    <Image style={styles.cardImg} source={bookIcon} />
                    <Text style={styles.cardText}>Presentations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={handleAdditionalFilesPress}>
                    <Image style={styles.cardImg} source={folderIcon} />
                    <Text style={styles.cardText}>Add.files</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
    },
    materials: {
        width: 342,
        alignSelf: 'center',
        marginBottom: 40,
        marginTop: 40,
    },
    title: {
        fontFamily: 'Gilroy-Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 20,
        color: '#0a001b',
        width: 342,
        marginHorizontal: 'auto',
        marginBottom: 25,
    },
    card: {
        width: 163,
        height: 163,
        backgroundColor: '#C4FF61',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    cardImg: {
        width: 80,
        height: 80,
    },
    cardText: {
        fontFamily: 'Gilroy-Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        textDecorationLine: 'none',
    },
    cards: {
        flexDirection: 'row',
    },
});
