import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import HeaderModules from './HeaderModules';

const dataAdd = [
    {
        title: "Intro to Mobile Applications",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Intro to Android",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Intro to Java",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Java classes",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Android user interface. Part 1",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Android user interface. Part 2",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Intro to IONIC",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
    {
        title: "Intro to XAMARIN",
        link: "https://drive.google.com/file/d/19tJyKebZBn5yn0sjKKOzfSDGLtf6lBiw/view?usp=sharing",
    },
];

export default function AdditionalFiles() {
    return (
        <View>
            <HeaderModules />
            <View style={styles.additional}>
                <Text style={styles.additional__title}>add.files</Text>
                <View style={styles.additional__block}>
                    {dataAdd.map((item, id) => (
                        <TouchableOpacity
                            key={id}
                            style={styles.additional__item_link}
                            onPress={() => Linking.openURL(item.link)}

                        >
                            <Text style={styles.additional__item}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    additional: {
        maxWidth: 342,
        alignSelf: 'center',
    },
    additional__title: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 36,
        textTransform: 'lowercase',
        color: '#0a001b',
        marginBottom: 25,
    },
    additional__block: {
        width: 342,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 10,
        marginTop: 10,
    },
    additional__item_link: {
        textDecorationLine: 'none',
    },
    additional__item: {
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
