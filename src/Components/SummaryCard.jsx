import moment from "moment";
import "../css/SummaryCard.css";
import React, { useMemo } from "react";
import convertToFahrenheit from "../helpers/convertToFahrenheit";

/**
 * SummaryCard component displays summarized weather information for a specific day.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Object} props.day - The weather data for a specific day.
 * @param {boolean} props.isFahrenheitMode - Indicates whether the temperature is in Fahrenheit mode.
 * @param {string} props.degreeSymbol - Symbol for degrees.
 * @returns {JSX.Element} JSX element representing the SummaryCard component.
 */
function SummaryCard({ day, isFahrenheitMode, degreeSymbol }) {
  // Construct the URL for the weather icon
  const dayIconUrl = `https://openweathermap.org/img/wn/${day.weather[0]["icon"]}@2x.png`;

  // Memoized formatted temperature to avoid unnecessary computations on re-renders
  const formattedTemp = useMemo(
    () =>
      Math.round(
        isFahrenheitMode ? convertToFahrenheit(day.main.temp) : day.main.temp
      ),
    [day.main.temp, isFahrenheitMode]
  );

  return (
    <li className='summary-items'>
      <div>
        {/* Display formatted temperature */}
        <p className=''>
          {formattedTemp}
          {degreeSymbol}
        </p>
        {/* Display weather main and icon */}
        <p className=''>
          {day.weather[0].main}
          <img src={dayIconUrl} alt='' />
        </p>
        {/* Display weather description */}
        <p className=''>{day.weather[0].description}</p>
        {/* Display time using moment.js */}
        <p className=''>{moment(day.dt_txt).format("hh:mm a")}</p>
      </div>
    </li>
  );
}

export default SummaryCard;
