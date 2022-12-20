import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ()  => {

    const [email, emailText] = React.useState("E-mail");
    const [password, passwordText] = React.useState("Hasło");

    const navigation = useNavigation();

    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={emailText}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={passwordText}
                    value={password}
                />
                <Pressable onPress={()=>navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Zaloguj się</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 200
    },
    input: {
        backgroundColor: '#fff',
        margin: 15,
        borderWidth: 2,
        padding: 10,
        width: 330,
        height: 80
      },
    container1: {
        flex: 1
    },
    btn: {
        marginTop: 40,
        borderRadius: 15,
        backgroundColor: `#adff2f`,
        width: 150,
        height: 100,
        justifyContent: 'center'
    }
  })
  ;

export default LoginScreen;

