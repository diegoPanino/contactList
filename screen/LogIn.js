import React, {Component} from 'react';
import {TextInput, Text, KeyboardAvoidingView, View, TouchableOpacity, StyleSheet} from 'react-native';
import PasswordInput from './PasswordInput.js';
import {connect} from 'react-redux';
import {logInAction} from '../redux/actions.js';

const LogIn =(props)=>{
	
	const [user,setUser] = React.useState('');
	const [psw,setPsw] = React.useState('');

	const checkLog=()=>{
		props.logInAction(user,psw);
	}

	React.useEffect(()=>{
		if(props.token){
			props.navigation.navigate('ContactList');}
	},[props.token])
	
	return(
		<View style={styles.main}>
			<KeyboardAvoidingView style={styles.view} behavior='padding' >
				<PasswordInput icon='person' label='Username' onChange = {t=>setUser(t)} secure={false}/>
				<PasswordInput icon='lock' label='Password' onChange = {t=>setPsw(t)} secure={true}/>
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
export default connect(mapStateToProps,{logInAction})(LogIn);

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



// checkLogin = () =>{
	// 	const {user,psw} = this.state
	// 	fetch('http://192.168.1.110:3001',{
	// 				method:'post',
	// 				headers:{'Content-Type':'application/json'},
	// 				body: JSON.stringify({
	// 					user: this.state.user,
	// 					psw: this.state.psw
	// 		})
	// 	})
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		if(data){
	// 			this.setState({user:'',psw:'',err:''})
	// 			this.props.navigation.navigate('ContactList')
	// 		}
	// 		else{
	// 			this.setState({user:'',psw:''})
	// 			this.setState({err:'Incorrect Login. Try again.'})
	// 		}
	// 	})
	// 	.catch(err => console.log(err));
	// }
