// 	this is for interaction with the api

const key = 'IkpbUqpGc8THmrlptatfAAYgRs9SIbVx' 


// get weather information
const getWeather = async (id)=>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"

    const query = `${id}?apikey=${key}`
    // use "?" to pass the parameter 

    const response = await fetch(base+query) // to attach both

    const data= await response.json()
    // console.log(data)
    return data[0]
}






// get city information
const getCity = async (city)=>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"

    const query = `?apikey=${key}&q=${city}`
    // "&" is to append with existing

    const response = await fetch(base+query) // to attach both

    const data= await response.json()

   
    return data[0]

}
// getCity('mumbai')
//     .then(data=>{ return getWeather(data.Key)}) // till this 
//     .then(data =>{console.log(data)})
//     .catch(err=>console.log(err))
