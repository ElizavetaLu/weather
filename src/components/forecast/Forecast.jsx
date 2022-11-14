import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import "./forecast.scss"
import { convertToCelsius, convertUnixTime } from "../../convert"

const Forecast = ({ data, location, hourlyData }) => {
  

    return (
        <div className="right-container">

            {data && <div className="right-content">
                <div className="current-location">
                    <div className='location-icon'>
                        <img src="/weather/build//icons/locationIcon.png" alt='location' />
                    </div>
                    <div className="location">
                        <div className="country">{location[1]},</div>
                        <div className="city">{location[0]}</div>
                    </div>
                </div>
                <div className="hourly-forecast">
                    <div className="title">Hourly Forecast</div>
                    <div className="weather-h-cards">
                        {hourlyData.map((item,indx) => (<div className="hourly-row" key={indx}>
                            <div className="hourly-icon">
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="hourly-time">{convertUnixTime(item.dt)}</div>
                            <div className="hourly-temp">{convertToCelsius(item.main.temp)}°C, </div>
                            <div className="hourly-description">{item.weather[0].description}</div>
                        </div>))}
                    </div>
                </div>
                <div className="weekly-forecast">
                    <div className="title">Weekly Forecast</div>



                    <Accordion allowZeroExpanded>
                        {data.map(item => (
                            <AccordionItem key={item.indx}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily-item">
                                            <div className="item">
                                                <img
                                                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                                    alt="weather"
                                                    className="icon-small" />
                                                <label className="day">{item.weekDay},</label>
                                                <label className="description">{item.description},</label>
                                                <label className="min-max">{convertToCelsius(item.tempMin)}°C / {convertToCelsius(item.tempMax)}°C</label>
                                            </div>


                                            <div className="vector">
                                                <img src="/weather/build//icons/vector.png" alt="" />
                                            </div>
                                        </div>

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="daily-details-grid">
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/pressure.png" alt="" />
                                            </div>
                                            <div className="param">Pressure: {item.pressure} hPa</div>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/humidity.png" alt="" />
                                            </div>
                                            <div className="param">Humidity: {item.humidity}%</div>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/clouds.png" alt="" />
                                            </div>
                                            <div className="param">Clouds: {item.clouds}</div>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/wind.png" alt="" />
                                            </div>
                                            <div className="param">Wind speed: {item.windSpeed}m/s</div>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/seaLvl.png" alt="" />
                                            </div>
                                            <div className="param">Sea level: {item.seaLevel}m</div>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <div className="full-weather-icon">
                                                <img src="/weather/build//icons/t.png" alt="" />
                                            </div>
                                            <div className="param">Feels like: {convertToCelsius(item.feelsLike)}°C</div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>}
        </div>
    )
}

export default Forecast