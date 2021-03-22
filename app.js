// this is to manipulate with dom

const cityForm = document.querySelector('form')
const card = document.querySelector('.card') // " . " is used for the card
const details = document.querySelector('.details')
const time= document.querySelector('img.time')
const icon = document.querySelector('.icon img')




const updateUI = (data)=>{

    // const cityDets = data.cityDets
    // const weather = data.weather

    // destructure properties (store the key properties of the object in the same name)
    const {cityDets,weather}= data
    console.log(weather)
    // update details temperlate here
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    // update time
    // let timeSrc  = null
    // if(weather.IsDayTime)
    // {
    //     timeSrc = 'img/day.svg'
    // }
    // else{
    //     timeSrc = 'img/night.svg'
    // }

    //lets use ternary operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'

    // set attribute of time
    time.setAttribute('src',timeSrc)

    // update icons
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc)

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove("d-none")
    }
}

const updateCity = async (city)=>{
    // getCity(city)
    // console.log(city)  
    const cityDets = await getCity(city)
    // we write await bcoz we want to make sure that we completed the 
    // procedure of getCity class.

    // get updates for the weather
    console.log(cityDets.key)
    const weather = await getWeather(cityDets.Key)

    return {cityDets, weather}
    // here it will consider the value and property are same
    // cityDets:cityDets,
    // weather:weather
    // to follow object shorthand notation

}

cityForm.addEventListener('submit',e=>{
    // prevent default actions
    e.preventDefault()

    // get the city value
    const city = cityForm.city.value.trim()
    //reset the form
    cityForm.reset()
    
    //update the ui with new city
    updateCity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))


        // set local storage
        localStorage.setItem('city',city); 


})
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))
}
