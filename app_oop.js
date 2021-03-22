
const cityForm = document.querySelector('form')
const card = document.querySelector('.card') // " . " is used for the card
const details = document.querySelector('.details')
const time= document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const forecast = new Forecast();

console.log(forecast)




const updateUI = (data)=>{

    
    const {cityDets,weather}= data
    console.log(weather)
   
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

  
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



cityForm.addEventListener('submit',e=>{
    // prevent default actions
    e.preventDefault()

    // get the city value
    const city = cityForm.city.value.trim()
    //reset the form
    cityForm.reset()
    
    //update the ui with new city
    forecast.updateCity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))


        // set local storage
        localStorage.setItem('city',city); 


})
if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))
}
