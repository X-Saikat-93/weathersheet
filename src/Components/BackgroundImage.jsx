/**
 * BackgroundImage function determines the background image URL based on weather conditions.
 *
 * @param {Object} data - Weather data used to determine the background image.
 * @returns {string} URL representing the background image.
 */
function BackgroundImage(data) {
  // Default id value
  let id = 0;

  // Check if the provided data is not an array and has the necessary properties
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    // Assign the weather id to the 'id' variable
    id = data.list[0].weather[0].id;
  }

  /**
   * getImageUrl function returns the image URL based on weather id.
   *
   * @param {number} weatherId - Weather id used to determine the image URL.
   * @returns {string} Image URL.
   */
  function getImageUrl(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
    if (weatherId >= 200 && weatherId < 300) {
      return "https://cdn-icons-png.flaticon.com/512/1779/1779927.png"; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 400) {
      return "https://cdn-icons-png.flaticon.com/512/2675/2675876.png"; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return "https://cdn-icons-png.flaticon.com/512/2469/2469994.png"; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return "https://cdn-icons-png.flaticon.com/512/5825/5825747.png"; // Snow
    } else if (weatherId >= 700 && weatherId < 800) {
      return "https://cdn-icons-png.flaticon.com/512/3026/3026389.png"; // Strong Wind
    } else if (weatherId === 800) {
      return "https://cdn-icons-png.flaticon.com/512/2698/2698194.png"; // Clear Day Image
    } else if (weatherId > 800) {
      return "https://cdn-icons-png.flaticon.com/512/3222/3222801.png"; // Cloudy Day
    }
  }

  // Return the image URL based on the weather id
  return getImageUrl(Number(id));
}

export default BackgroundImage;
