import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import module1 from '../assets/img/moduleImage1.png';
import module2 from '../assets/img/moduleImage2.png';
import module3 from '../assets/img/moduleImage3.png';
import module4 from '../assets/img/moduleImage4.png';


export default function Modules() {
    const navigation = useNavigation();
    return (
        <View style={styles.modules}>
            <Text style={styles.title}>lectures</Text>
            <ScrollView
                style={styles.overflow}
                contentContainerStyle={styles.cardContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('LessonFirst')}
                >
                    <Image style={styles.image} source={module1} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('LessonSecond')}
                >
                    <Image style={styles.image} source={module2} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('LessonThird')}
                >
                    <Image style={styles.image} source={module3} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('LessonFourth')}
                >
                    <Image style={styles.image} source={module4} />
                </TouchableOpacity>

                <View style={styles.water} />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    modules: {
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        width: 342,
        fontFamily: 'Gilroy-Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        marginHorizontal: 'auto',
    },
    overflow: {
        marginTop: 25,
        height: 245,
        paddingLeft: 20, // Добавлен отступ слева
    },
    cardContainer: {
        alignItems: 'center',
    },
    card: {
        marginRight: 15,
        width: 342,
        height: 224,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    water: {
        padding: 20,
    },
});
