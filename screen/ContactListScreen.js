import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import ContactList from '../ContactList.js';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    body:{
      flex:1,
      backgroundColor:'rgb(210,145,200)',//'rgba(215, 210, 54, 0.75)',,
    },
    addButton:{
      position:'absolute',
      bottom:30,
      right:30,
      height: 50,
      width: 50,
      zIndex: 3,
      elevation:5,
      borderWidth:1,
      backgroundColor:'orange',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
    },
    text:{
      fontSize:30,
      textAlign:'center',
      color:'purple'
    }
})

const ContactListScreen = (props) =>{
      return (
          <View style={styles.body} >
                <TouchableOpacity style={styles.addButton} onPress={()=>props.navigation.navigate('AddForm')} >
                  <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            <ContactList contacts={props.contacts}/>
          </View>
      )}  

const mapStateToProps = state =>({
  contacts: state.contacts,
  err: state.err,
  token: state.token
})
export default connect(mapStateToProps)(ContactListScreen)

