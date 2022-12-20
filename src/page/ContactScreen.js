import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, FlatList, View, TextInput, Pressable} from 'react-native';
import dummyContacts from '../data/contacts.json';
import { Linking } from 'react-native';

const ContactScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact => 
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  const callUser = () => {
    Linking.openURL(`tel:572859102`);
  };

  return (
    <View>
      <StatusBar barStyle={'dark-content'}/>
        <TextInput value={searchTerm} onChangeText={setSearchTerm} style={styles.searchInput} placeholder='Search...'/>
        <FlatList 
          data={filteredContacts}
          renderItem={({item}) => (
            <Pressable onPress={() => callUser(item)}>
              <Text style={styles.contactName}>{item.user_display_name}</Text>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
      padding: 15,
      margin: 2
    },
    contactName: {
      fontSize: 38,
      marginVertical: 10,
      margin: 4
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#dedede'
    },
    searchInput: {
      backgroundColor: 'lightgray',
      padding: 10,
      borderRadius: 7,
      margin: 7
    }
  });

  export default ContactScreen;