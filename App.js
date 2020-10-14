import React, {Component} from 'react';
import Constants from 'expo-constants';
import ContactListScreen from './screen/ContactListScreen.js';
import AddFormScreen from './screen/AddFormScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()
export default class App extends Component{
  
  showAddForm=()=>{
    this.setState({showAddForm:true})
  }
render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' component={ContactListScreen} />
        <Stack.Screen name='AddForm' component={AddFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
     
  }
}


