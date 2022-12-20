import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Button, Alert} from 'react-native';


const HomeScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert(
        "Nastąpi teraz wylogowanie z konta",
        "Czy chcesz kontynuować?",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate('LoginScreen') }
        ]
        );

    const navigation = useNavigation();

    return (
        <View style={styles.nxtcontainer}>
            <View style={styles.container}>
                <View style={styles.btnOpiekun}>
                    <Button color="#841584" title="Panel Opiekuna" onPress={()=>navigation.navigate('CarerScreen')}/>
                </View>
            <View style={styles.btnSenior}>
                <Button color="#841584" title="Panel Seniora" onPress={()=>navigation.navigate('SeniorScreen')}/>
            </View>
        </View>
        <View>
            <Button title="Testowanie" onPress={()=>navigation.navigate('TestingScreen')}/>
        </View>
        <View style={styles.btnLog}>
            <Button title="Wróć do logowania" onPress={createTwoButtonAlert}/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    btnOpiekun: {
      borderRadius: 15,
      backgroundColor: `#00ffff`,
      width: 150,
      height: 100,
      justifyContent: 'center'
    },
    btnSenior: {
      borderRadius: 15,
      backgroundColor: `#7fffd4`, 
      width: 150,
      height: 100,
      justifyContent: 'center',
    },
    nxtcontainer: {
      flex: 1
    },
    btnLog: {
      padding: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
  ;

export default HomeScreen;