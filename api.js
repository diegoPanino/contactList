const url = "https://randomuser.me/api/?results=3&nat=gb"

export const fetchContatcs = async () =>{
	try{
		const response = await fetch(url);
		const results = await response.json();
		return results.results.map(trasforData)
	}catch(err){
		console.log("FETCH ERROR "+err)
	}
	
}

const trasforData = (contact) => {
	return	{
			name: `${contact.name.last} ${contact.name.first}`,
			phone:contact.phone
		}
	}