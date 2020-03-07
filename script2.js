const fetch = require('node-fetch');

const getPeoplePromise= fetch => {
	return fetch('https://swapi.co/api/people')
		.then(response=> response.json())
		.then(data => {
			console.log(data);
			return{
				count: data.count,
				results: data.results
			}
		})
}
const getPeople= async (fetch) => {
	const getdata= await fetch('https://swapi.co/api/people');
		const data= await getdata.json();
			//console.log(data);
			return{
				count: data.count,
				results: data.results
			}
}
//getPeople(fetch)
module.exports= {
	getPeoplePromise,
getPeople
}
