import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {addContactReducer,addUserReducer} from './reducers.js';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


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
export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);

