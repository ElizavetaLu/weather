import { convertToCelsius } from "../../../../convert";
import "./weeklyWeatherData.scss";

const WeeklyWeatherData = ({ icon, weekDay, description, tempMin, tempMax }) => {

    return (
        <div className="weekly-block">
            <div className="item">
                <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="weather"
                />
                <label className="day">{weekDay},</label>
                <label className="description">{description},</label>
                <label className="min-max">{convertToCelsius(tempMin)}°C / {convertToCelsius(tempMax)}°C</label>
            </div>

            <img className="vector" src="/weather/build//icons/vector.png" alt="" />
        </div>
    )
}

export default WeeklyWeatherData 