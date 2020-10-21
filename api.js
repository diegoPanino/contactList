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

export const loginUser = async (username,password) =>{
		const response = await fetch('http://192.168.1.110:3001',{
											method:'POST',
											headers:{'Content-Type':'application/json'},
											body: JSON.stringify({
												'user':username,
												'psw':password
											})
									})
		if(response.ok){
			const {token} = await response.json()
			return token;
		}
		const errMsg = await response.text();
		throw new Error(errMsg);
}