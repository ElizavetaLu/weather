import './App.scss';
import CurrentWeather from './components/current-wether/CurrentWeather';
import Search from './components/search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ContainerForecast from './components/forecast/ContainerForecast';

const App = () => {

  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  // const [cityImages, setCityImages] = useState(null);

  const getData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/');

    Axios.get(`https://ipapi.co/${res.data.IPv4}/json/`).then(response => {
      const data = response.data
        setLocation([data.city, data.country_name])
      return {
        city: data.city,
        lat: data.latitude,
        lon: data.longitude
      }

    })
      .then(({ lat, lon, city }) => {

        const currentWeather = Axios.get(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        const forecast = Axios.get(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        const images = Axios.get(`https://pixabay.com/api/?key=30829827-297e9233b1d4dc1331d36e488&q=${city}&image_type=photo`)

        Promise.all([currentWeather, forecast, images])
          .then(async (response) => {
            const weatherResponse = await response[0].data
            const forecastResponse = await response[1].data
            const cityImagesResponse = await response[2].data.hits

            const allImages = cityImagesResponse.map(elem => elem.largeImageURL)

            setCurrentWeather({ ...weatherResponse })
            setForecast({ ...forecastResponse })
            setCurrentImage(allImages)
          })
          .catch(err => console.log(err))

      })
  }


  const handleOnSearchChange = searchData => {
    const city = searchData.label.split(',')[0]
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const cityImagesFetch = fetch(`https://pixabay.com/api/?key=30829827-297e9233b1d4dc1331d36e488&q=${city}&image_type=photo`)

    Promise.all([currentWeatherFetch, forecastFetch, cityImagesFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
        const cityImagesResponse = await response[2].json()

        const allImages = cityImagesResponse.hits.map(elem => elem.largeImageURL)

        setCurrentWeather(weatherResponse)
        setForecast(forecastResponse)
        setCurrentImage(allImages)
      })
      .catch(err => console.log(err))
  }




  const [currentImage, setCurrentImage] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {


    const id = setInterval(() => {
      setIndex(prev => {
        if(!prev) return
        if (prev === currentImage.length - 1) {
          prev = 0
        }
        return prev + 1
      });
    }, 15000)

    return () => clearInterval(id);

  }, [currentImage])

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main" style={currentImage && { backgroundImage: `url("${currentImage[index]}")` }} >
      <Search onSearchChange={handleOnSearchChange} />

      <div className="main-content">

        {currentWeather ? <CurrentWeather data={currentWeather} /> : <div></div>}
        {forecast && <ContainerForecast data={forecast} location={location} />}

      </div>
    </div>
  );
}

export default App;
