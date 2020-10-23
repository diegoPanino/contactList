import {ADD_CONTACT,ADD_USER,
		LOG_IN_FULLFILL,
		LOG_IN_REJECTED,
		CLEAN_ERROR,
		addContactAction,addUserAction,
		cleanErrorAction } from './actions.js';
import contacts from '../contact.js';

export const addContactReducer=(state = [contacts],action)=>{
	if(action.type === ADD_CONTACT) return [...state,action.payload];
	else return state;
}

export const addUserReducer = (state = {user:{err:'',token:''}},action) => {
	switch(action.type){
		case ADD_USER: return {...state,...action.payload};
		case LOG_IN_FULLFILL: return {...state,token:action.payload,err:''};
		case LOG_IN_REJECTED: return {...state,err:action.payload};
		case CLEAN_ERROR: return {...state,err:null};
		default: return state;
	}
}
