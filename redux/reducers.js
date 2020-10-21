import {ADD_CONTACT,ADD_USER,
		LOG_IN_FULLFILL,
		LOG_IN_REJECTED,
		CLEAN_ERROR,
		addContactAction,addUserAction,
		cleanErrorAction } from './actions.js';

export const addContactReducer=(state = [],action)=>{
	if(action.type === ADD_CONTACT) return [...state,action.payload];
	else return state;
}

export const addUserReducer = (state = {},action) => {
	switch(action.type){
		case ADD_USER: return {...state,...action.payload};
		case LOG_IN_FULLFILL: return {...state,token:action.payload,err:''};
		case LOG_IN_REJECTED: return {...state,err:action.payload};
		default: return state;
	}
}

export const cleanErrorReducer = (state = '',action)=>{
}
