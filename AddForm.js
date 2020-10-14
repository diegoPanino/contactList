import React, {Component} from 'react';
import {TextInput,StyleSheet,View,Button,KeyboardAvoidingView} from 'react-native';

const styles = StyleSheet.create({
	input:{
		borderWidth:1,
		borderColor:'blue',
		padding:10,
		margin:10,
		
	},
	addForm:{
		flex:1,
		justifyContent:'center',
		margin:20,
	}
})

export default class AddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:"",
			phone:"",
			validForm:false,
		}
	}

	nameChange=(name)=>{
		this.setState({name:name})
	}

	phoneChange=(phone)=>{
		if(+phone >= 0 && phone.length <= 10)
			this.setState({phone:phone})
	}

	validateForm=()=>{
		const {phone, name} = this.state
		if(+phone >= 0 && phone.length === 10 && name.length >= 3)
			this.setState({validForm:true})
		else
			this.setState({validForm:false})
	}

	componentDidUpdate(prevProps,prevState){
		if(prevState.name !== this.state.name || prevState.phone !== this.state.phone){
			this.validateForm();
		}
	}

	submitForm=()=>{
		const newContact = {name:this.state.name,phone:this.state.phone} 
		this.props.submit(newContact)
	}

	render(){
		return (
			<KeyboardAvoidingView behavior='padding' style = {styles.addForm}>
				<TextInput
					style = {styles.input}
					value={this.state.name}
					keyboardType='default'
					onChangeText={this.nameChange}
				 />
				<TextInput
					style = {styles.input}
					value={this.state.phone}
					keyboardType='number-pad'
					onChangeText={this.phoneChange}
				 />
				 <Button title='Submit' onPress={this.submitForm} disabled={!this.state.validForm}/>

			</KeyboardAvoidingView>
			)
	}	
}