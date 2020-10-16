//action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_USER = 'ADD_USER';

//action creator

export const addContactAction = newContact => ({
		type: ADD_CONTACT,
		payload: newContact,
})

export const addUserAction = newUser => ({
	type:ADD_USER,
	payload: newUser,
})