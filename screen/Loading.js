import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export const Loading = () =>{
	return (
		<View style={styles.loadingPage}>
			<Text>LOADING...</Text>
		</View>
		);
}

const styles = StyleSheet.create({
	loadingPage:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'green',
	}
})