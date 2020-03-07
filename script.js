const googleDatabase=[
'dodofried.com',
'assaultedgari.ng',
'freelance.com',
'viewerstv.com.ng',
'divaquest.ng'
];

const matchdata= (searchInput,db)=>{
	const match=db.filter(website =>{
		return website.includes(searchInput)
	})
	return match.length > 3 ? match.slice(0,3) : match
}
//console.log(matchdata('free',googleDatabase));
module.exports = matchdata;