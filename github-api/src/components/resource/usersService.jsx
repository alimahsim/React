
async function getInfo(url){

   let res = await fetch(url) 

   if (!res.ok){
    throw new Error ('Rubbish input mate!')
   }
   return await res.json()
}
export { getInfo };