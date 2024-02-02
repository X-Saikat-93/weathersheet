/**
 * BackgroundColor function determines the background color based on weather conditions.
 *
 * @param {Object} data - Weather data used to determine the background color.
 * @returns {string} Hex color code representing the background color.
 */
function BackgroundColor(data) {
  // Default id value
  let id = 0;

  // Check if the provided data is not an array and has the necessary properties
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    // Assign the weather id to the 'id' variable
    id = data.list[0].weather[0].id;
  }

  /**
   * getColorCode function returns a color code based on weather id.
   *
   * @param {number} weatherId - Weather id used to determine the color code.
   * @returns {string} Hex color code.
   */
  function getColorCode(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
    if (weatherId >= 200 && weatherId < 300) {
      return "#394240"; // Thunderstorm (dark gray)
    } else if (weatherId >= 300 && weatherId < 400) {
      return "#7895A2"; // Drizzle (light blue-gray)
    } else if (weatherId >= 500 && weatherId < 600) {
      return "#51667A"; // Rain (dark blue-gray)
    } else if (weatherId >= 600 && weatherId < 700) {
      return "#D3E0EA"; // Snow (light blue)
    } else if (weatherId >= 700 && weatherId < 800) {
      return "#7E8B97"; // Atmosphere (gray)
    } else if (weatherId === 800) {
      return "#87CEEB"; // Clear sky (sky blue)
    } else {
      return "#1874CD"; // Clouds (light gray-blue)
    }
  }

  // Return the color code based on the weather id
  return getColorCode(Number(id));
}

export default BackgroundColor;
