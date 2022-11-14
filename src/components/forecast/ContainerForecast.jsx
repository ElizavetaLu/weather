import React from "react";
import Forecast from "./Forecast"

const WEEK_DAYS = [1, 2, 3, 4, 5, 6, 0]

const ContainerForecast = ({ data, location }) => {

    const hourlyWeatherData = []
    const date = new Date()

    data.list.forEach(elem => {
        if (elem.dt_txt.slice(8, 10) === date.getDate().toString()) {
            return hourlyWeatherData.push(elem)
        }
    })

    let weekDaysSortedData = [1, 2, 3, 4, 5, 6]


    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek - 1, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek - 1))


    const weekForecast = [
        {
            weekDay: 'Monday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Tuesday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Wednesday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Thursday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Friday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Saturday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        },
        {
            weekDay: 'Sunday',
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            icon: '',
            description: '',
            indx: '',
            pressure: null,
            humidity: null,
            clouds: null,
            windSpeed: null,
            seaLevel: null,
        }
    ]

    if (data.list) {
        data.list.forEach(elem => {
            const date = new Date(elem.dt * 1000)
            const weekIndex = date.getDay()


            const icon = elem.weather[0].icon
            const description = elem.weather[0].description
            const pressure = elem.main.pressure
            const humidity = elem.main.humidity
            const clouds = elem.clouds.all
            const windSpeed = elem.wind.speed
            const seaLevel = elem.main.sea_level
            switch (weekIndex) {
                case 1:
                    weekForecast[0].temp.push(elem.main.temp);
                    weekForecast[0].feelsLike.push(elem.main.feels_like);
                    weekForecast[0].tempMin.push(elem.main.temp_min);
                    weekForecast[0].tempMax.push(elem.main.temp_max);
                    weekForecast[0].icon = icon
                    weekForecast[0].description = description
                    weekForecast[0].indx = 1
                    weekForecast[0].pressure = pressure
                    weekForecast[0].humidity = humidity
                    weekForecast[0].clouds = clouds
                    weekForecast[0].windSpeed = windSpeed
                    weekForecast[0].seaLevel = seaLevel
                    break;
                case 2:
                    weekForecast[1].temp.push(elem.main.temp)
                    weekForecast[1].feelsLike.push(elem.main.feels_like);
                    weekForecast[1].tempMin.push(elem.main.temp_min);
                    weekForecast[1].tempMax.push(elem.main.temp_max);
                    weekForecast[1].icon = icon
                    weekForecast[1].description = description
                    weekForecast[1].indx = 2
                    weekForecast[1].pressure = pressure
                    weekForecast[1].humidity = humidity
                    weekForecast[1].clouds = clouds
                    weekForecast[1].windSpeed = windSpeed
                    weekForecast[1].seaLevel = seaLevel
                    break;
                case 3:
                    weekForecast[2].temp.push(elem.main.temp)
                    weekForecast[2].feelsLike.push(elem.main.feels_like);
                    weekForecast[2].tempMin.push(elem.main.temp_min);
                    weekForecast[2].tempMax.push(elem.main.temp_max);
                    weekForecast[2].icon = icon
                    weekForecast[2].description = description
                    weekForecast[2].indx = 3
                    weekForecast[2].pressure = pressure
                    weekForecast[2].humidity = humidity
                    weekForecast[2].clouds = clouds
                    weekForecast[2].windSpeed = windSpeed
                    weekForecast[2].seaLevel = seaLevel
                    break;
                case 4:
                    weekForecast[3].temp.push(elem.main.temp)
                    weekForecast[3].feelsLike.push(elem.main.feels_like);
                    weekForecast[3].tempMin.push(elem.main.temp_min);
                    weekForecast[3].tempMax.push(elem.main.temp_max);
                    weekForecast[3].icon = icon
                    weekForecast[3].description = description
                    weekForecast[3].indx = 4
                    weekForecast[3].pressure = pressure
                    weekForecast[3].humidity = humidity
                    weekForecast[3].clouds = clouds
                    weekForecast[3].windSpeed = windSpeed
                    weekForecast[3].seaLevel = seaLevel
                    break;
                case 5:
                    weekForecast[4].temp.push(elem.main.temp)
                    weekForecast[4].feelsLike.push(elem.main.feels_like);
                    weekForecast[4].tempMin.push(elem.main.temp_min);
                    weekForecast[4].tempMax.push(elem.main.temp_max);
                    weekForecast[4].icon = icon
                    weekForecast[4].description = description
                    weekForecast[4].indx = 5
                    weekForecast[4].pressure = pressure
                    weekForecast[4].humidity = humidity
                    weekForecast[4].clouds = clouds
                    weekForecast[4].windSpeed = windSpeed
                    weekForecast[4].seaLevel = seaLevel
                    break;
                case 6:
                    weekForecast[5].temp.push(elem.main.temp)
                    weekForecast[5].feelsLike.push(elem.main.feels_like);
                    weekForecast[5].tempMin.push(elem.main.temp_min);
                    weekForecast[5].tempMax.push(elem.main.temp_max);
                    weekForecast[5].icon = icon
                    weekForecast[5].description = description
                    weekForecast[5].indx = 6
                    weekForecast[5].pressure = pressure
                    weekForecast[5].humidity = humidity
                    weekForecast[5].clouds = clouds
                    weekForecast[5].windSpeed = windSpeed
                    weekForecast[5].seaLevel = seaLevel
                    break;
                case 0:
                    weekForecast[6].temp.push(elem.main.temp)
                    weekForecast[6].feelsLike.push(elem.main.feels_like);
                    weekForecast[6].tempMin.push(elem.main.temp_min);
                    weekForecast[6].tempMax.push(elem.main.temp_max);
                    weekForecast[6].icon = icon
                    weekForecast[6].description = description
                    weekForecast[6].indx = 0
                    weekForecast[6].pressure = pressure
                    weekForecast[6].humidity = humidity
                    weekForecast[6].clouds = clouds
                    weekForecast[6].windSpeed = windSpeed
                    weekForecast[6].seaLevel = seaLevel
                    break;

                default:
                    break;
            }
        })


        weekForecast.forEach(elem => {
            elem.temp = (elem.temp.reduce((a, b) => a + b, 0) / elem.temp.length)
            elem.feelsLike = (elem.feelsLike.reduce((a, b) => a + b, 0) / elem.feelsLike.length)
            elem.tempMin = (elem.tempMin.reduce((a, b) => a + b, 0) / elem.tempMin.length)
            elem.tempMax = (elem.tempMax.reduce((a, b) => a + b, 0) / elem.tempMax.length)
        })

        weekForecast.forEach(elem => {
            switch (elem.indx) {
                case forecastDays[0]:
                    weekDaysSortedData[0] = elem
                    break;

                case forecastDays[1]:
                    weekDaysSortedData[1] = elem
                    break;

                case forecastDays[2]:
                    weekDaysSortedData[2] = elem
                    break;

                case forecastDays[3]:
                    weekDaysSortedData[3] = elem
                    break;

                case forecastDays[4]:
                    weekDaysSortedData[4] = elem
                    break;

                case forecastDays[5]:
                    weekDaysSortedData[5] = elem
                    break;

                case forecastDays[6]:
                    weekDaysSortedData[6] = elem
                    break;

                case forecastDays[0]:
                    weekDaysSortedData[7] = elem
                    break;

                default:
                    break;
            }
        })
    }


    return <Forecast location={location} data={weekDaysSortedData} hourlyData={hourlyWeatherData}/>
}

export default ContainerForecast