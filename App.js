import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, FlatList, View} from 'react-native';
import Navigation from './src/page/navigation';
import LoginScreen from './src/page/LoginScreen';


const App = () => {


  
  return (

    <Navigation />

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red"
    }
});

export default App;
