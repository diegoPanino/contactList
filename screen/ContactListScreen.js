import React, {Component} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';
import ContactList from '../ContactList.js';
import contacts from '../contact.js';
import {fetchContatcs} from '../api.js';

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

export default class ContactListScreen extends Component{
    constructor(props){
      super(props);
      this.state={
        contacts:contacts,
        Contacts:null,
      }
    }

    componentDidUpdate(prevProps,prevState){
      if(this.props.route.params?.submit){
        const newContact = this.props.route.params.submit
        if(this.state === prevState){
          let contactList = this.state.contacts
          contactList.push(newContact)
          this.setState({contacts:contactList})
        }
      }
    }

  
    render(){ 
      return (
          <View style={styles.body} >
            <View style={styles.addButton}>
                <Button onPress={()=>this.props.navigation.navigate('AddForm')} title="+" />
            </View>
            <ContactList contacts={this.state.contacts}/>
          </View>
      )}
}  

