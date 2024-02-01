
import React, { useMemo } from "react";
import moment from "moment";
import "../css/Forecast.css";
import convertToFahrenheit from "../helpers/convertToFahrenheit";

const Forecast = ({
  city,
  weatherData,
  loading,
  degreeSymbol,
  isFahrenheitMode,
}) => {
  return (
    <>
      <div className='forecast-background'>
        <h2 className='forecast-title'>{city} 5-Day Forecast</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className='forecast-list'>
            {weatherData.list &&
              weatherData.list.map((day, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);

                const formattedTemp = useMemo(
                  () =>
                    Math.round(
                      isFahrenheitMode
                        ? convertToFahrenheit(day.main.temp)
                        : day.main.temp
                    ),
                  [day.main.temp, isFahrenheitMode]
                );

                return (
                  <li key={index} className='forecast-item'>
                    <div>
                      <p className='forecast-temp'>
                        {formattedTemp}
                        {degreeSymbol}
                      </p>
                      <p className='forecast-main'>
                        {day.weather[0].main}
                        <img
                          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                          className='forecast-icon'
                        />
                      </p>
                      <p className='forecast-description'>
                        {day.weather[0].description}
                      </p>
                      <p className='forecast-date'>
                        {moment(date).format("MMMM DD")}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Forecast;
