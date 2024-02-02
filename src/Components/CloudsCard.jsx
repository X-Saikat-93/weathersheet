import React from "react";
import moment from "moment";

/**
 * CloudsCard component displays cloud-related information.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Object} props.data - Data containing information for rendering the CloudsCard.
 * @param {Object} props.data.formattedData - Formatted weather data.
 * @param {string} props.data.degreeSymbol - Symbol for degrees.
 * @param {Object} props.data.weather - Weather information.
 * @param {string} props.data.weather_icon - URL of the weather icon.
 * @returns {JSX.Element} JSX element representing the CloudsCard component.
 */
function CloudsCard({ data }) {
  // Destructuring data for easier access
  const { formattedData, degreeSymbol, weather, weather_icon } = data;

  return (
    <div className='clouds'>
      {/* Temperature */}
      <p className='celsius'>
        {formattedData.temp}
        {degreeSymbol}
      </p>
      {/* Cloud Icon */}
      <div className='cloud-icon'>
        {weather[0].main}
        <img src={weather_icon} className='' alt='' />
      </div>
      {/* Weather Description */}
      <p className='des'>
        <span>{weather[0].description}</span>
      </p>
      {/* Current Date */}
      <p className='time'>
        <span>{moment().format("dddd MMM YYYY")}</span>
      </p>
    </div>
  );
}

export default CloudsCard;
