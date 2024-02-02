import React from "react";

/**
 * MoreInfoCard component displays additional weather information.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Object} props.data - The weather data to be displayed.
 * @param {Object} props.data.formattedData - Formatted weather data.
 * @param {string} props.data.degreeSymbol - Symbol for degrees.
 * @param {Object} props.data.main - Main weather information.
 * @param {Object} props.data.clouds - Cloud coverage information.
 * @returns {JSX.Element} JSX element representing the MoreInfoCard component.
 */
function MoreInfoCard({ data }) {
  // Destructure the data object
  const { formattedData, degreeSymbol, main, clouds } = data;

  return (
    <div className='more-info'>
      {/* Real Feel */}
      <p className=''>
        Real Feel:{" "}
        <span>
          {formattedData.feels_like}
          {degreeSymbol}
        </span>
      </p>
      {/* Humidity */}
      <p className=''>
        Humidity: <span>{main.humidity}%</span>
      </p>
      {/* Cloud Cover */}
      <p className=''>
        Cover: <span>{clouds.all}%</span>
      </p>
      {/* Min Temperature */}
      <p className=''>
        Min Temp:{" "}
        <span>
          {formattedData.temp_min}
          {degreeSymbol}
        </span>
      </p>
      {/* Max Temperature */}
      <p className=''>
        Max Temp:{" "}
        <span>
          {formattedData.temp_max}
          {degreeSymbol}
        </span>
      </p>
      {/* Wind Speed */}
      <p className=''>
        Wind Speed:{" "}
        <span>
          {formattedData.wind && formattedData.wind.speed !== undefined
            ? formattedData.wind.speed.toFixed(2) + " m/s"
            : "N/A"}
        </span>
      </p>
      {/* Wind Direction */}
      <p className=''>
        Wind Direction:{" "}
        <span>
          {formattedData.wind && formattedData.wind.deg !== undefined
            ? formattedData.wind.deg.toFixed(0) + "°"
            : "N/A"}
        </span>
      </p>
    </div>
  );
}

export default MoreInfoCard;
