const matchdata=require('./script.js')
const trydata=[
'active.com',
'kubwaabj.com',
'activeta.com',
'actime.com'
];
describe('Matchdata', ()=>{
	it('Search Engine Test', () => {
	expect(matchdata('nappy',trydata)).toEqual([]);
	expect(matchdata('active',trydata)).toEqual(['active.com','activeta.com']);
	})
	it('work with undefined and null input', () => {
	expect(matchdata(undefined,trydata)).toEqual([]);
	expect(matchdata(null,trydata)).toEqual([]);
	})

	it('must not return more than 3', () => {
	expect(matchdata('.com',trydata).length).toEqual(3);
	})
})
