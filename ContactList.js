import React, {Component} from 'react';
import {StyleSheet,SectionList,Text,View} from 'react-native';

const styles = StyleSheet.create({
	contact:{
		padding:10,
		borderBottomWidth:1,
		borderTopWidth:1,
		borderColor:'purple',
		borderRadius:20,
	},
	sectionHeader:{
		backgroundColor:'rgba(128, 0, 128,0.4)',
		borderRadius:20,
		fontSize:18,
		textAlign:'center',
		fontWeight:'bold',
		borderColor:'purple',
		marginRight:150,
		marginLeft:150,
	},
	text:{
		fontSize:15,
	}
})
const ContactList = props =>{
	
	const renderItem = obj =>{
   		return(
   			 <View style={styles.contact}>
             	<Text style={styles.text}>{obj.item.name}</Text>
              	<Text style={styles.text}>{obj.item.phone}</Text>
          	 </View>)
  	}
	
	const renderSectionHeader = obj => <Text style = {styles.sectionHeader}>{obj.section.title}</Text>
	const contactsByLetter = props.contacts.reduce((obj, contact) => {
    	const firstLetter = contact.name[0].toUpperCase()
    	return {
      		...obj,
      		[firstLetter]: [...(obj[firstLetter] || []), contact]
    	}
  		}, {})

	const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    	title: letter,
    	data: contactsByLetter[letter],
  	}))

	return (
		<SectionList
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			sections={sections}
		/>	
		)
}

export default ContactList;