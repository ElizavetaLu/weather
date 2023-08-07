import React, { useState } from "react"; 
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import "./forecast.scss";
import HourWeatherData from "./components/hour-data/HourWeatherData";
import WeeklyWeatherData from "./components/weekly-data/WeeklyWeatherData";
import WeeklyDataExpanded from "./components/weekly-data-expanded/WeeklyDataExpanded";



const Forecast = ({ data, hourlyData }) => {
    
    const [isHourlyForecastActive, setIsHourlyForecastActive] = useState(true)

    return (
        <div className="right-container">

            {
                data &&
                <div className="right-content"> 

                    <div className="buttons-row">
                        <button
                            className={`button ${isHourlyForecastActive && 'active'}`}
                            onClick={() => setIsHourlyForecastActive(true)}
                        >Hourly Forecast</button>
                        
                        <button
                            className={`button ${!isHourlyForecastActive && 'active'}`}
                            onClick={() => setIsHourlyForecastActive(false)}
                        >Weekly Forecast</button>
                    </div>

                    {
                        isHourlyForecastActive
                            ? <div className="forecast-list">
                                {
                                    hourlyData.map((item, indx) => <HourWeatherData key={indx} {...item} />)
                                }
                            </div>

                            : <div className="weekly-forecast">

                                <Accordion allowZeroExpanded>
                                    {
                                        data.map(item => {

                                            return (
                                                <AccordionItem key={item.weekDay}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            <WeeklyWeatherData {...item} />
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <WeeklyDataExpanded {...item} />
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                    }



                </div>
            }
        </div>
    )
}

export default Forecast