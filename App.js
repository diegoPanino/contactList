import React, {Component} from 'react';
import Constants from 'expo-constants';
import ContactListScreen from './screen/ContactListScreen.js';
import AddFormScreen from './screen/AddFormScreen.js'
import LogIn from './screen/LogIn.js';
import Loading from './screen/Loading.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './redux/store.js'; 
import {YellowBox} from 'react-native';

const Stack = createStackNavigator()
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['VirtualizedList']);
export default class App extends Component{
      render(){
        return (
          <Provider store ={store} >
           <PersistGate loading ={null} persistor={persistor} >
              <NavigationContainer>
                <Stack.Navigator initialRouteName='LogIn'>
                  <Stack.Screen name='ContactList' component={ContactListScreen} />
                  <Stack.Screen name='AddForm' component={AddFormScreen} />
                  <Stack.Screen name='LogIn' component={LogIn} />
                </Stack.Navigator>
              </NavigationContainer>
           </PersistGate>
          </Provider>
        )   
      }
}


