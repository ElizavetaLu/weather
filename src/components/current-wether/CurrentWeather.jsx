import React from "react";
import "./currentWeather.scss"
import { convertToCelsius, convertUnixTime } from "../../convert"

const CurrentWeather = ({ data }) => {
    // console.log(data)
    return (
        <div className="container">
            <div className="content">

                <div className="press-vis">
                    <div className="row">{data.name}</div>
                    <div className="row">Wind: {data.wind.speed} m/s</div>
                </div>


                <div className="center">
                    <div className="sun-temp-info">
                        <div className="sun">
                            <div className="icon">
                                <img src="/weather/build//icons/sunRise.png" alt="" />
                            </div>
                            <div className="time">{convertUnixTime(data.sys.sunrise)}</div>
                        </div>

                        <div className="t">
                            <div className="t-icon">
                                <img src="/weather/build//icons/minT.png" alt="" />
                            </div>
                            <div className="deg">{convertToCelsius(data.main.temp_min)}°</div>
                        </div>
                    </div>

                    <div className="current-t">{convertToCelsius(data.main.temp)}°</div>

                    <div className="sun-temp-info">
                        <div className="sun">
                            <div className="icon">
                                <img src="/weather/build//icons/sunSet.png" alt="" />
                            </div>
                            <div className="time">{convertUnixTime(data.sys.sunset)}</div>
                        </div>

                        <div className="t">
                            <div className="t-icon">
                                <img src="/weather/build//icons/maxT.png" alt="" />
                            </div>
                            <div className="deg">{convertToCelsius(data.main.temp_max)}°</div>
                        </div>
                    </div>
                </div>

                <div className="description">{data.weather[0].description}</div>
                <div className="row">Feels like: {convertToCelsius(data.main.feels_like)}°</div>

                {/*   <div className="weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default CurrentWeather