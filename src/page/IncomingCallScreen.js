import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Button, Pressable, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import bg from '../images/ios_bg.jpg';

const IncomingCallScreen = ()  => { 

const onDecline = () => {
    console.warn("on Decline");
};

const onAccept = () => {
    console.warn('on Accept');
};

    const navigation = useNavigation();

    return (
        <ImageBackground source={bg} style={styles.bg} resizeMorde="cover">
                <Text style={styles.name}>Alex</Text>
                <Text style={styles.phoneNumber}>Call...</Text>

            <View style={[styles.row, {marginTop: 'auto'}]}>
                <View style={styles.iconContainer}>
                    <Ionicons name="alarm" color="white" size={30} />
                    <Text style={styles.iconText}>Remind me</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name="message" color="white" size={30} />
                    <Text style={styles.iconText}>Message</Text>
                </View>
            </View>

            
            <View style={styles.row}>
                <Pressable onPress={onDecline} style={styles.iconContainer}>
                    <View style={styles.iconButtonContainer}>
                        <Feather name="x" color="white" size={40} />
                    </View>
                    <Text style={styles.iconText}>Decline</Text>
                </Pressable>

                <Pressable onPress={onAccept} style={styles.iconContainer}>
                    <View style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
                        <Feather name="check" color="white" size={40} />
                    </View>
                    <Text style={styles.iconText}>Accept</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 100,
        marginBottom: 15,
    },
    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },
    bg: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingBottom: 50,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 20,

    },
    iconText: {
        color: 'white',
        marginTop: 10,
    },
    iconButtonContainer: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
        margin: 10
    }
});

export default IncomingCallScreen;