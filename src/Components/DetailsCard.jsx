import React, { useMemo } from "react";
import "../css/DetailsCard.css";
import convertToFahrenheit from "../helpers/convertToFahrenheit";
import CloudsCard from "./CloudsCard";
import MoreInfoCard from "./MoreInfoCard";

/**
 * DetailsCard component displays detailed weather information.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.weather_icon - The icon representing the current weather.
 * @param {Object} props.data - The weather data to be displayed.
 * @param {boolean} props.isFahrenheitMode - Indicates whether the temperature is in Fahrenheit mode.
 * @param {string} props.degreeSymbol - Symbol for degrees.
 * @returns {JSX.Element} JSX element representing the DetailsCard component.
 */
function DetailsCard({ weather_icon, data, isFahrenheitMode, degreeSymbol }) {
  // Destructure relevant data from the 'data' prop
  const { clouds, main, weather } = data.list[0];

  // Memoized formatted data to avoid unnecessary computations on re-renders
  const formattedData = useMemo(() => {
    return {
      temp: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp) : main.temp
      ),
      feels_like: Math.round(
        isFahrenheitMode
          ? convertToFahrenheit(main.feels_like)
          : main.feels_like
      ),
      temp_min: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp_max) : main.temp_max
      ),
      temp_max: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp_min) : main.temp_min
      ),
      wind: {
        speed: data.list[0].wind.speed, // Assuming the wind speed is in the first forecast
        deg: data.list[0].wind.deg, // Assuming the wind direction is in the first forecast
      },
    };
  }, [
    isFahrenheitMode,
    main.feels_like,
    main.temp,
    main.temp_max,
    main.temp_min,
  ]);

  return (
    <div className='details'>
      {/* CloudsCard component */}
      <CloudsCard
        data={{ formattedData, degreeSymbol, weather, weather_icon }}
      />
      {/* MoreInfoCard component */}
      <MoreInfoCard data={{ formattedData, degreeSymbol, main, clouds }} />
    </div>
  );
}

export default DetailsCard;
