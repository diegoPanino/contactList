import React, {Component} from 'react';
import {TextInput, Text, KeyboardAvoidingView, View, TouchableOpacity, StyleSheet} from 'react-native';
import PasswordInput from './PasswordInput.js';
import {connect} from 'react-redux';
import {logInAction,cleanErrorAction} from '../redux/actions.js';

const LogIn =(props)=>{
	
	const [user,setUser] = React.useState('');
	const [psw,setPsw] = React.useState('');

	React.useEffect(()=>{
		props.navigation.addListener('blur',()=>{
			const  clean = '';
			setUser(clean);
			setPsw(clean);
		})
		if(props.token){
			props.cleanErrorAction();
			props.navigation.navigate('ContactList');}
			
	},[props.token])

	const checkLog=()=>{
		props.logInAction(user,psw);
	}

	const handlerUserChange=(text)=>{
		setUser(text);
		props.cleanErrorAction();
	}

	const handlerPswChange=(text)=>{
		setPsw(text);
		props.cleanErrorAction();
	}
	
	return(
		<View style={styles.main}>
			<KeyboardAvoidingView style={styles.view} behavior='padding' >
				<PasswordInput icon='person' label='Username' onChange = {handlerUserChange} secure={false} value={user}/>
				<PasswordInput icon='lock' label='Password' onChange = {handlerPswChange} secure={true} value={psw}/>
			</KeyboardAvoidingView>
			<TouchableOpacity style={styles.button} onPress={checkLog}>
				<Text style={styles.text}>Log in</Text>
			</TouchableOpacity>
			
			<Text style={{color:'red'}}>{props.err}</Text>
		</View>
	);
}
const mapStateToProps =(state)=>({
	err: state.user.err,
	token:state.user.token
})
export default connect(mapStateToProps,{logInAction,cleanErrorAction})(LogIn);

const styles = StyleSheet.create({
	main:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'rgb(210,145,200)',//'rgba(215, 210, 54, 0.75)',
	},
	view:{
		alignItems:'baseline',
	},
	text:{

	},
	button:{
		borderRadius: 10,
		backgroundColor:'orange',
		padding:5,

		alignItems:'center',
		width:50,
		margin:5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	}
});	