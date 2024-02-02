/**
 * Converts a temperature value from Celsius to Fahrenheit.
 *
 * @param {number} celsius - The temperature value in Celsius.
 * @returns {number} The equivalent temperature value in Fahrenheit.
 */
export default function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
