import {ADD_CONTACT,ADD_USER,addContactAction,addUserAction} from './actions.js';

export const addContactReducer=(state = [],action)=>{
	if(action.type === ADD_CONTACT) return [...state,action.payload];
	else return state;
}

export const addUserReducer = (state = {},action) => {
	if(action.type === ADD_USER) return {...state,...action.payload}
	else return state;
}