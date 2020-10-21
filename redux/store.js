import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {addContactReducer,addUserReducer} from './reducers.js';
import contacts from '../contact.js';

const persistConfig = {
	key:'root',
	storage:AsyncStorage,
	whitelist:['user','contacts'],
	timeout:null,
}
const reducer = combineReducers({
	user:addUserReducer,
	contacts:addContactReducer
})
const persistedReducer = persistReducer(persistConfig,reducer);
export const store = createStore(persistedReducer,{user:{},contacts:contacts},applyMiddleware(thunk));
export const persistor = persistStore(store);

