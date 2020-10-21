import React, {Component} from 'react';
import {StyleSheet,SectionList,Text,View} from 'react-native';

const styles = StyleSheet.create({
	contact:{
		padding:10,
		margin:20,
		backgroundColor:'lightgrey',
		color:'blue',
		borderWidth:1,
		borderColor:'blue',
	},
	sectionHeader:{
		paddingLeft:5,
		fontWeight:'bold',
	}
})
const ContactList = props =>{
	
	const renderItem = obj =>{
   		return(
   			 <View style={styles.contact}>
             	<Text>{obj.item.name}</Text>
              	<Text>{obj.item.phone}</Text>
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