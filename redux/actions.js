import {loginUser} from '../api.js';
//action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_USER = 'ADD_USER';
export const LOG_IN_SENT = 'LOG_IN_SENT';
export const LOG_IN_FULLFILL = 'LOG_IN_FULLFILL';
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED';
export const CLEAN_ERROR = 'CLEAN_ERROR';

//action creator

export const addContactAction = newContact => ({
		type: ADD_CONTACT,
		payload: newContact,
})

export const addUserAction = newUser => ({
	type:ADD_USER,
	payload: newUser,
})

export const cleanErrorAction = () =>({
	type:CLEAN_ERROR,
})

//async action creator

export const logInAction = (username,password) => dispatch =>{
	dispatch({type:LOG_IN_SENT})
	loginUser(username,password)
		.then((token)=>{
			dispatch({type:LOG_IN_FULLFILL,payload:token})
		})
		.catch((err)=>{
			dispatch({type:LOG_IN_REJECTED,payload:err.message})
		})

}