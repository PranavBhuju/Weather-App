const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '434e0b83a9msh81ad8b1e0287ca6p195504jsn5f84c8a64d41',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        //feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    
}

const forseattle = (Seattle)=>{
    

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        //feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    
}

const forbang = (Bangalore)=>{
    

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        //feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    
}



submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Seattle.addEventListener("click", (e)=>{
    e.preventDefault()
    forseattle(Seattle.value)
})
Bangalore.addEventListener("click", (e)=>{
    e.preventDefault()
    forbang(Bangalore.value)
})

getWeather("Delhi")





const ShanghaiW = (Shanghai)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        aa.innerHTML = response.cloud_pct
        bb.innerHTML = response.temp
        cc.innerHTML = response.humidity
        dd.innerHTML = response.min_temp
        ee.innerHTML = response.max_temp
        ff.innerHTML = response.wind_speed
        hh.innerHTML = response.wind_degrees
        ii.innerHTML = response.sunrise
        jj.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
ShanghaiW("Shanghai")

const NewyorkW = (Newyork)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        a.innerHTML = response.cloud_pct
        b.innerHTML = response.temp
        c.innerHTML = response.humidity
        d.innerHTML = response.min_temp
        e.innerHTML = response.max_temp
        f.innerHTML = response.wind_speed
        h.innerHTML = response.wind_degrees
        i.innerHTML = response.sunrise
        j.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
NewyorkW("New York")

const TokyoW = (Tokyo)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        aaa.innerHTML = response.cloud_pct
        bbb.innerHTML = response.temp
        ccc.innerHTML = response.humidity
        ddd.innerHTML = response.min_temp
        eee.innerHTML = response.max_temp
        fff.innerHTML = response.wind_speed
        hhh.innerHTML = response.wind_degrees
        iii.innerHTML = response.sunrise
        jjj.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
TokyoW("Tokyo")

const capeW = (CapeTown)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cape Town', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        aaaa.innerHTML = response.cloud_pct
        bbbb.innerHTML = response.temp
        cccc.innerHTML = response.humidity
        dddd.innerHTML = response.min_temp
        eeee.innerHTML = response.max_temp
        ffff.innerHTML = response.wind_speed
        hhhh.innerHTML = response.wind_degrees
        iiii.innerHTML = response.sunrise
        jjjj.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
capeW("Cape town")