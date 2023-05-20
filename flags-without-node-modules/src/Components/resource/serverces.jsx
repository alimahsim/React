
async function getInfo(url){

    let res = await fetch(url) 
 
    if (!res.ok){
     throw new Error ('Something went wrong!')
    }
    
    return await res.json()
 }
 export default getInfo