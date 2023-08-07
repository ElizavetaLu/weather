import { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from './components/current-wether/CurrentWeather';
import ContainerForecast from './components/forecast/ContainerForecast';
import Search from './components/search/Search';
import './App.scss';


const delay = 15000;


const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getData = async () => {

    const res = await Axios.get('https://geolocation-db.com/json/');

    Axios.get(`https://ipapi.co/${res.data.IPv4}/json/`).then(response => {
      const data = response.data
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
            setCurrentImages(allImages)
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
        setCurrentImages(allImages)
      })
      .catch(err => console.log(err))
  }



  useEffect(() => {
    getData()
  }, [])



  const [currentImages, setCurrentImages] = useState(null);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === currentImages?.length - 1 ? 0 : prevIndex + 1),

      delay);

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="main">
      <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {
            currentImages?.map((url, index) => {
              return (
                <div key={index} className="slide" style={{ backgroundImage: `url(${url})` }}></div>
              )
            })
          }
        </div>
      </div>


      {currentImages ? null : <div className='isLoading'></div>}

      <Search onSearchChange={handleOnSearchChange} />

      <div className="main-content">

        {currentWeather ? <CurrentWeather data={currentWeather} /> : <div></div>}
        {forecast && <ContainerForecast data={forecast} />}

      </div>
    </div>
  );
}

export default App;
