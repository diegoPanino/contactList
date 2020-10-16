import React, {Component} from 'react';
import Constants from 'expo-constants';
import ContactListScreen from './screen/ContactListScreen.js';
import AddFormScreen from './screen/AddFormScreen.js'
import LogIn from './screen/LogIn.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {addContactReducer,addUserReducer} from './redux/reducers.js';

import contacts from './contact.js';

const reducer = combineReducers({
  user:addUserReducer,
  contact:addContactReducer,

})

const store = createStore(reducer,{user:{},contact:contacts});

const Stack = createStackNavigator()
export default class App extends Component{
  
render(){
  return (
    <Provider store ={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen name='ContactList' component={ContactListScreen} />
          <Stack.Screen name='AddForm' component={AddFormScreen} />
          <Stack.Screen name='LogIn' component={LogIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    )
     
  }
}


