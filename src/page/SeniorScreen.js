import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, TouchableOpacity, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const SeniorScreen = () => {

    const navigation = useNavigation();

    const sendSMS = () => {
        const phoneNumber = '1234567890';
        const message = 'Hello, this is a pre-filled message';
      
        Linking.openURL(`sms:${phoneNumber}&body=${message}`);
      };

    const createTwoButtonAlert = () =>
    Alert.alert(
    "ZGŁOŚ ALARM",
    "Chcesz wysłać SMS do opiekuna, czy zadzwonić na 112?",
    [
        {
            text: "Anuluj",
            onPress: () => console.log('Anulowane'),
            style: "cancel"
        },
        {
        text: "Wyślij SMS",
        onPress: sendSMS,
        },
        { 
        text: "Zadzwoń na 112", 
        onPress: () =>  Linking.openURL(`tel:112`) 
        }
    ]
    );

    return (
        <View style={styles.container}>
            <View style={styles.first_row}>
                <View style={styles.btn}>
                    <Pressable onPress={()=>navigation.navigate('CalendarScreen')}>
                        <Text style={styles.btnText}>Kalendarz</Text>
                    </Pressable>
                </View>
                <View style={styles.btn}>
                    <Pressable onPress={()=>navigation.navigate('FamilyScreen')}>
                        <Text style={styles.btnText}>Rodzina</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.second_row}>
            <   View style={styles.btn}>
                    <Pressable onPress={()=>navigation.navigate('CuresScreen')}>
                        <Text style={styles.btnText}>Leki</Text>
                    </Pressable>
                </View>
                <View style={styles.btn}>
                    <Pressable onPress={()=>navigation.navigate('Contacts')}>
                        <Text style={styles.btnText}>Numery</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.third_row}>
                <View style={styles.btn}>
                    <Pressable onPress={()=>navigation.navigate('GamesScreen')}>
                        <Text style={styles.btnText}>Mini gry</Text>
                    </Pressable>
                </View>
                <View style={styles.btnAlarm}>
                    <Pressable onPress={createTwoButtonAlert}>
                        <Text style={styles.btnText}>ALARM</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff', 
    },
    first_row: {
        flex : 1, 
        backgroundColor: '#fff',
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row',
    },
    second_row: {
        flex : 1, 
        backgroundColor: '#fff',
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row',
    },
    third_row: {
        flex : 1, 
        backgroundColor: '#fff',
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 60
    },
    btn: {
      borderRadius: 15,
      backgroundColor: `#7fffd4`,
      width: 150,
      height: 100,
      justifyContent: 'center',
    },
    btnText: {
        color: 'blue',
        fontSize: 24,
        textAlign: 'center'
    },
    btnAlarm: {
        borderRadius: 15,
        backgroundColor: `red`,
        width: 150,
        height: 100,
        justifyContent: 'center',
    }
  })
  ;
export default SeniorScreen;

