import { convertToCelsius } from "../../../../convert";
import "./weeklyDataExpanded.scss";

const WeeklyDataExpanded = ({
    pressure,
    humidity,
    clouds,
    windSpeed,
    seaLevel,
    feelsLike
}) => {

    return (
        <div className="weekly-data-expanded">
            <div className="data">
                <img className="data-icon" src="/weather/build//icons/pressure.png" alt="" />
                <div className="param">Pressure: {pressure} hPa</div>
            </div>

            <div className="data">
                <img className="data-icon" src="/weather/build//icons/humidity.png" alt="" />
                <div className="param">Humidity: {humidity}%</div>
            </div>

            <div className="data">
                <img className="data-icon" src="/weather/build//icons/clouds.png" alt="" />
                <div className="param">Clouds: {clouds}</div>
            </div>

            <div className="data">
                <img className="data-icon" src="/weather/build//icons/wind.png" alt="" />
                <div className="param">Wind speed: {windSpeed}m/s</div>
            </div>

            <div className="data">
                <img className="data-icon" src="/weather/build//icons/seaLvl.png" alt="" />
                <div className="param">Sea level: {seaLevel}m</div>
            </div>

            <div className="data">
                <img className="data-icon" src="/weather/build//icons/t.png" alt="" />
                <div className="param">Feels like: {convertToCelsius(feelsLike)}°C</div>
            </div>

        </div>
    )
}

export default WeeklyDataExpanded