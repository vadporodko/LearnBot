import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderModules from './HeaderModules';

const dataAdd = [
    {
        title: "Android feature demonstrator",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
    {
        title: "Broadcast Sample",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
    {
        title: "Database Example",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
    {
        title: "Graph",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
    {
        title: "Time Logger Server",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
    {
        title: "Weather App",
        link: "https://drive.google.com/drive/folders/1YUXGxQ6-54wvGYU8T-k5AEQ8nSFxRAj_?usp=sharing",
    },
];

export default function Presentations() {
    return (
        <View>
            <HeaderModules />
            <View style={styles.presentations}>
                <Text style={styles.presentations__title}>presentations</Text>
                <View style={styles.presentations__block}>
                    {dataAdd.map((item, id) => (
                        <TouchableOpacity
                            key={id}
                            style={styles.presentations__item_link}
                            onPress={() => Linking.openURL(item.link)}
                        >
                            <Text style={styles.presentations__item}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    presentations: {
        maxWidth: 342,
        alignSelf: 'center',
    },
    presentations__title: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 36,
        textTransform: 'lowercase',
        color: '#0a001b',
        marginBottom: 25,
    },
    presentations__block: {
        width: 342,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 10,
        marginTop: 10,
    },
    presentations__item_link: {
        textDecorationLine: 'none',
    },
    presentations__item: {
        width: 300,
        height: 50,
        fontFamily: 'Gilroy-Bold',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
        color: '#0a001b',
        textDecorationLine: 'underline', 
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(160, 160, 177, 0.3)',
        paddingVertical: 10,
        alignSelf: 'center',
    },
});
