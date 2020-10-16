import React, {Component} from 'react';
import {Item, Input, Icon, Label} from 'native-base';

export default class PasswordInput extends Component {
	constructor(props){
		super(props)
		this.state = {
			icon:'eye-off',
			hide: true,
		}
	}

	changeIcon = () =>{
	this.setState(prevState=>({
				icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
				hide: !prevState.hide 
			}))
	}
	render(){
		const {label,icon,onChange,secure} = this.props
		return(
				<Item floatingLabel style={{margin:10}} >
					<Icon active name={icon} />
					<Label>{label}</Label>
					<Input secureTextEntry = {secure&&this.state.hide}
							onChangeText = {(e)=>onChange(e)} />
					<Icon name={this.state.icon} onPress = {this.changeIcon} />
				</Item>
			)
	}
}
