function BackgroundColor(data) {
  let id = 0;

  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }

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


  return getColorCode(Number(id));

}

export default BackgroundColor;
