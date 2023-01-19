const body = document.querySelector('body')

const dateDay = document.querySelector('.date-day');
const date = document.querySelector('.date');
const dateMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const clockSeconds = document.querySelector('.clock-seconds__arrow');
const clockMinutes = document.querySelector('.clock-minutes__arrow');
const clockHours = document.querySelector('.clock-hours__arrow');

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

setInterval(() =>{
const currentData = new Date()
const timeDay = arrDay[currentData.getDay()]
const timeDate = currentData.getDate()
const timeMonth =  namesOfMonth[currentData.getMonth()]
const timeYear = currentData.getFullYear()

const hours = currentData.getHours()
const minutes = currentData.getMinutes()
const seconds = currentData.getSeconds()

// коли - 360 градусів
// поділок - 60
// за одну секунду стрілочка робить зміщення на 6 градусів
const secondsDeg = 360/60;
const minutesDeg = 360/60;
// 360 коло, годин за один оберт --> 12
const hoursDeg = 360/12;

const string = `Час - ${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`


dateDay.textContent = timeDay
date.textContent = timeDate
dateMonth.textContent = timeMonth
dateYear.textContent = timeYear
digitalClock.textContent = string

clockSeconds.style.transform = `rotate(${seconds * secondsDeg}deg)`
clockMinutes.style.transform = `rotate(${minutes * minutesDeg}deg)`
clockHours.style.transform = `rotate(${hours * hoursDeg + (hoursDeg / 60 * minutes)}deg)`

},1000)



// const buttonRef = document.querySelector('.js-button')
// buttonRef.addEventListener('click',()=>{
//     console.log('click')
// })

const picturesArray = [
    'https://wallpapercave.com/wp/wp9070107.jpg',
'https://wallpapercave.com/wp/wp1961497.jpg',
'https://images.alphacoders.com/124/1249032.jpg',
'https://wallpaperaccess.com/full/115103.jpg',
'https://images7.alphacoders.com/458/458518.jpg',
'https://wallpaperaccess.com/full/2072981.jpg',
'https://images.wallpaperscraft.com/image/single/amalfi_italy_sea_sorrento_hdr_112931_3840x2160.jpg',
'https://www.teahub.io/photos/full/1-13638_amazing-4k-wallpapers-of-italy-country-italy-background.jpg',
'https://wallpaperaccess.com/full/1163620.jpg',
'https://wallpapershome.com/images/wallpapers/new-york-1920x1080-winter-4k-5k-snow-street-12802.jpg'
]
const emojis = ['😍','🤨','🥳','🥶']
bgChange()
function bgChange() {
        loopArray(picturesArray)

}
//Перебираю масив, коли останній, все заново
function loopArray(array){
    for(let i = 0; i < array.length; i +=1){
        setTimeout(() =>{
        console.log(i,array[i])    

        body.style.backgroundImage = `url(${array[i]})`

        const lastEl = array.length - 1
        if(i === lastEl){
            console.log('last')
            loopArray(array)
        }
    
    }, 6000*(i+1)) //1500 * (i + 1))
    }
}

// setInterval(bgChange,5000)


// const random = bg[Math.floor(Math.random() * bg.length)]
// console.log('random',random)
//     body.style.backgroundImage = `url(${random})`