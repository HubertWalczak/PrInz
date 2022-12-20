import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Button, Pressable} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CallingScreen = ()  => { 

    const navigation = useNavigation();
    const route = useRoute();

    const user = route?.params?.user;

    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>{user?.user_display_name}</Text>
                <Text style={styles.phoneNumber}>ringing +48 571 859 285</Text>
        </View>

            <View style={styles.buttonContainer}>
                <View style={styles.iconButton}>
                    <Ionicons name="ios-camera-reverse" size={30} color={'white'}/>
                </View>

                <View style={styles.iconButton}>
                    <MaterialIcons name="camera-off" size={30} color={'white'}/>
                </View>

                <View style={styles.iconButton}>
                    <MaterialIcons name="microphone-off" size={30} color={'white'}/>
                </View>

                <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
                    <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#7b4e80',
    },
    cameraPreview: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,

    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 15,
    },
    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },
    buttonContainer: {
        backgroundColor: '#333333',
        padding: 20,
        paddingBottom: 40,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50
    }
});

export default CallingScreen;