import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YouTubeIframe from 'react-native-youtube-iframe';

import buttonback from '../assets/img/buttonback.png';
import logo from '../assets/img/logo-mini.png';
import play from '../assets/img/play.png';
import bglessons1 from '../assets/img/bglessons1.png';
import folderIcon from "../assets/img/folder-mini.png";


const screenHeight = Dimensions.get('window').height;
export default function LessonSecond() {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={styles.headerLessonsContainer}

                >
                    <Image style={styles.headerLessons} source={bglessons1} alt="" />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleBackButton}>
                            <Image style={styles.backButton} source={buttonback} alt="" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                            <Image style={styles.logo} source={logo} alt="" />
                        </TouchableOpacity>
                        <View style={styles.weight}></View>
                    </View>
                    <TouchableOpacity style={styles.playButton} onPress={openModal}>
                        <Image style={styles.playIcon} source={play} alt="" />
                    </TouchableOpacity>
                </View>
                <View style={styles.lessons}  >
                    <View style={styles.lessonsPadding}>
                        <Text style={styles.lessonsTitle}>lecture #2</Text>
                        <Text style={styles.lessonsSubtitle}>Applications for Android</Text>
                    </View>
                </View>
                <View style={styles.abstract}>
                    <TouchableOpacity style={styles.button} TouchableOpacity onPress={() => navigation.navigate('AdditionalFiles')}>
                        <Image style={styles.img} source={folderIcon} />
                        <Text style={styles.buttonText}>add.materials</Text>
                    </TouchableOpacity>
                </View>
                {isModalOpen && (
                    <View style={styles.videoModal}>
                        <TouchableOpacity style={styles.videoModalOverlay} onPress={closeModal} />
                        <YouTubeIframe
                            videoId="p0ItPcqqXog"
                            height={200}
                            width={300}
                            play={isModalOpen}
                            onChangeState={(event) => {
                                if (event === 'ended') {
                                    closeModal();
                                }
                            }}
                        />
                    </View>
                )}
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('MainPage')}>
                    <Text style={styles.buttonTextHome}>to main page</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    videoModal: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoModalOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    headerLessonsContainer: {
        margin: 0,
        maxWidth: 425,
        height: 420,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 'auto',
    },
    headerLessons: {
        margin: 0,
        maxWidth: 425,
        height: 420,
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 'auto',
    },
    header: {
        width: 342,
        margin: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 70,
    },
    backButton: {
        width: 16,
        height: 16,
    },
    logo: {
        height: 20,
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
    lessons: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginHorizontal: 'auto',
        width: 342,
        alignSelf: 'center',
        marginTop: -50,
    },
    lessonsTitle: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 26,
        color: '#000000',
        margin: 0,
        marginBottom: 24,
    },
    lessonsSubtitle: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 26,
        color: '#000000',
        margin: 0,
        marginBottom: 24,
    },
    lessonsPadding: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 294,
        minHeight: 150,
        marginHorizontal: 'auto',
        alignSelf: 'center',
        paddingVertical: 24,
    },
    abstract: {
        marginTop: -20,
        marginBottom: -20,
    },
    link: {
        textDecorationLine: 'none',
    },
    button: {
        fontWeight: '400',
        lineHeight: 21,
        color: '#0a001b',
        backgroundColor: '#C4FF61',
        alignSelf: 'center',
        marginTop: 50,
        width: 342,
        height: 69,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 40,
        height: 40,
    },
    buttonText: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 26,
    },
    homeButton: {
        fontWeight: '400',
        lineHeight: 21,
        color: '#0a001b',
        backgroundColor: '#000000',
        alignSelf: 'center',
        marginTop: 50,
        width: 342,
        height: 69,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        zIndex: -1,
        marginBottom: 114
    },
    buttonTextHome: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 26,
        color: '#ffffff',
    },
});
