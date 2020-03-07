const fetch = require ('node-fetch')

const swapi = require ('./script2');

describe('Swappi Test', ()=>{
	it('Call swapi to get people', (done) => {
		expect.assertions(1); //want to know how many assertion was success
		swapi.getPeople(fetch).then(data =>{
		expect(data.count).toEqual(87);	
		done(); //made the test to wait till function is perform
		})
	})
	it('Call swapi to get people with Promise', () => {
		swapi.getPeoplePromise(fetch).then(data =>{
		expect.assertions(2); //want to know how many assertion was success
		expect(data.count).toEqual(87);	
		expect(data.results.length).toBeGreaterThan(5);
		})
	})



//This is mock function, that spy without retrieving data through API

	it('getPeople returns counts and details', () => {
		const mockFetch= jest.fn()
			.mockReturnValue(Promise.resolve({
				json: () => Promise.resolve({
					count:87,
					results: [0,1,2,3,4,5]
				})
			}))
			expect.assertions(4)
			return swapi.getPeoplePromise(mockFetch).then(data =>{
			expect(mockFetch.mock.calls.length).toBe(1);	
			expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
			expect(data.count).toEqual(87);	
			expect(data.results.length).toBeGreaterThan(5);		
			})
	})

})