// date javascript

let alldays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
    'saturday'
]
let allyear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

let date = new Date()
let todayDate = "0" + date.getDate()
let day = date.getDay()
let month = date.getMonth()
let accurateDay = alldays[day]
let accurateMonth = allyear[month]

// let randomDays = ()=>{
//     let random = Math.floor(Math.random()*alldays.length)
//     return random
// }


let week = document.querySelector('.week')
let dateHtml = document.querySelector('.date')
let form = document.querySelector('form')
week.innerText = `${accurateDay}`
dateHtml.innerText = `${todayDate} ${accurateMonth}`


// main started

let submitBtn = document.getElementById('submitBtn')
let cityName = document.getElementById('cityName')
let temp = document.querySelector('.temp')
let imageSeason = document.querySelector('.imageSeason')
let temperatureInfo = document.querySelector('.temperatureInfo')
let city_name = document.querySelector('.city_name')
// let cityVal = cityName.value

let getInfo =  async (e) => {
    e.preventDefault()
    console.log(cityName.value)
    if (cityName.value === "") {
        city_name.innerHTML = `<h1>please write your city name</h1>`

    }
    else {

        temperatureInfo.classList.remove('hide_class')

        try {


            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=24ec663aadbd5667fc1d1c663750b32b`
            
            const response = await fetch(url)
               let data = await response.json()
               let orgData = [data]
            console.log(orgData)
             city_name.innerHTML = `${orgData[0].name},${orgData[0].sys.country}`
            temp.innerHTML = `${orgData[0].main.temp}&deg;C`
            // imageSeason.innerHTML = `<i class="fas fa-cloud Images"></i>`

            let tempSeason = orgData[0].weather[0].main
            console.log(tempSeason)
            if(tempSeason == 'Clouds'){
                imageSeason.innerHTML = `<i class="fas fa-cloud Images"></i>`
            }
            else if(tempSeason == 'Mist'){
                imageSeason.innerHTML = `<i class="fas fa-smog Images"></i>`
            }
            else if(tempSeason == 'Haze'){
                imageSeason.innerHTML = `<i class="fas fa-smog Images"></i>`
            }
            else if(tempSeason == 'Fog'){
                imageSeason.innerHTML = `<i class="fas fa-smog Images"></i>`
            }
            else if(tempSeason == 'Rain'){
                imageSeason.innerHTML = `<i class="fas fa-cloud-rain Images"></i>`

            }
            else if(tempSeason == 'Clear'){
                imageSeason.innerHTML = `<i class="fas fa-sun sunImage"></i>`
            }
            else{
                imageSeason.innerHTML = `<i class="fas fa-sun sunImage"></i>`
                
            }

        }
        catch {
            city_name.innerHTML = `<h2>Enter Correct city Name</h2>`

        }

    }

}
submitBtn.addEventListener('click', getInfo)