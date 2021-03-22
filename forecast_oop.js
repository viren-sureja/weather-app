class Forecast{
    constructor(){
        this.key = 'IkpbUqpGc8THmrlptatfAAYgRs9SIbVx'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';

        const updateCity = async (city => {
            const cityDets = await this.getCity(city)
            const weather = await this.getWeather(cityDets.Key)
            return {cityDets, weather}

        });

        const getCity = async (city=>{
            const base = "http://dataservice.accuweather.com/locations/v1/cities/search"

            const query = `?apikey=${this.key}&q=${city}`
            // "&" is to append with existing

            const response = await fetch(this.cityURI+query) // to attach both

            const data= await response.json()

        
            return data[0]

        });

        const getWeather = ()=> {
            const query = `${id}?apikey=${this.key}`
            // use "?" to pass the parameter 

            const response = await fetch(this.weatherURI+query) // to attach both

            const data= await response.json()
            // console.log(data)
            return data[0]


        }
    }
}
