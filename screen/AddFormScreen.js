import React , {Component} from 'react';
import AddForm from '../AddForm.js';

export default class AddFormScreen extends Component{
	submitForm = newContact =>{
		newContact.key = Math.random() *1000
		this.props.navigation.navigate('ContactList',{
			submit:newContact
		})
	}

	render(){
		return <AddForm submit={this.submitForm} />
	}
}