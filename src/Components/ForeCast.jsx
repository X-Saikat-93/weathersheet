import React, { useMemo } from "react";
import moment from "moment";
import "../css/Forecast.css";
import convertToFahrenheit from "../helpers/convertToFahrenheit";

/**
 * Forecast component displays a 5-day weather forecast.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.city - The city for which the forecast is displayed.
 * @param {Object} props.weatherData - The weather data for the 5-day forecast.
 * @param {boolean} props.loading - Indicates whether the data is still loading.
 * @param {string} props.degreeSymbol - Symbol for degrees.
 * @param {boolean} props.isFahrenheitMode - Indicates whether the temperature is in Fahrenheit mode.
 * @returns {JSX.Element} JSX element representing the Forecast component.
 */
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
        {/* Forecast Title */}
        <h2 className='forecast-title'>{city} 5-Day Forecast</h2>
        {/* Loading Message or Forecast List */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className='forecast-list'>
            {/* Map through each day in the forecast */}
            {weatherData.list &&
              weatherData.list.map((day, index) => {
                // Calculate date for each forecast day
                const date = new Date();
                date.setDate(date.getDate() + index);

                // Memoized formatted temperature to avoid unnecessary computations on re-renders
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
                      {/* Forecast Temperature */}
                      <p className='forecast-temp'>
                        {formattedTemp}
                        {degreeSymbol}
                      </p>
                      {/* Forecast Weather Main */}
                      <p className='forecast-main'>
                        {day.weather[0].main}
                        <img
                          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                          className='forecast-icon'
                        />
                      </p>
                      {/* Forecast Weather Description */}
                      <p className='forecast-description'>
                        {day.weather[0].description}
                      </p>
                      {/* Forecast Date */}
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
