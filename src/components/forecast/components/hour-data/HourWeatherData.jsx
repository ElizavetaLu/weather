import { convertToCelsius, convertUnixTime } from "../../../../convert";
import "./hourWeatherData.scss";

const HourWeatherData = ({ weather, dt, main }) => {
    return (
        <div className="hourly-block">
            <div className="hourly-time">{convertUnixTime(dt)}</div>
            
            <img
                className="hourly-icon"
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt=""
            />

            <div className="hourly-temp">{convertToCelsius(main.temp)}°C, </div>
            <div className="hourly-description">{weather[0].description}</div>
        </div>
    )
}

export default HourWeatherData 