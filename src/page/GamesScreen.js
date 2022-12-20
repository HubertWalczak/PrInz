import React from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Button} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const GamesScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.textItem}>
                <Text style={styles.items}>
                    Gry do wyboru:
                </Text></View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.btn1}>
                        <Pressable onPress={()=>navigation.navigate('FlappyGameScreen')}>
                            <Text>Flappy bird!</Text>
                        </Pressable>
                    </View>
                    <View style={styles.btn2}>
                        <Pressable onPress={()=>navigation.navigate('MemoryGameScreen')}>
                            <Text>Memory game!</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff', 
        justifyContent: 'space-around', 
        alignItems: 'center',
    },
    items: {
        fontSize: 45
    },
    buttonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 50,
        justifyContent: 'space-between',
        width: 350
    },
    btn1: {
        borderRadius: 15,
        backgroundColor: `#7fffd4`,
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
    btn2: {
        borderRadius: 15,
        backgroundColor: `#7fffd4`,
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textItem: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default GamesScreen;

