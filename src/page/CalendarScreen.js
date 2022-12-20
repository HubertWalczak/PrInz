import React from 'react';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

const CalendarScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Witaj w kalendarzu!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1, 
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems: 'center',
    }
  })
  ;

export default CalendarScreen 