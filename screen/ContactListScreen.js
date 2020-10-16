import React, {Component} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';
import ContactList from '../ContactList.js';
import contacts from '../contact.js';
import {fetchContatcs} from '../api.js';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    body:{
      flex:1,
      paddingTop:Constants.statusBarHeight+30,
    },
    addButton:{
      position:'absolute',
      bottom:30,
      right:30,
      height: 35,
      width: 50,
      zIndex: 3,
      elevation:3,
    },
})

const ContactListScreen = (props) =>{
      return (
          <View style={styles.body} >
            <View style={styles.addButton}>
                <Button onPress={()=>props.navigation.navigate('AddForm')} title="+" />
            </View>
            <ContactList contacts={props.contacts}/>
          </View>
      )}  

const mapStateToProps = state =>({
  contacts: state.contact
})
export default connect(mapStateToProps)(ContactListScreen)

