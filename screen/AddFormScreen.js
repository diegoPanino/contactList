import React , {Component} from 'react';
import AddForm from '../AddForm.js';

export default class AddFormScreen extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <AddForm submit={()=>this.props.navigation.navigate('ContactList')} />
	}
}