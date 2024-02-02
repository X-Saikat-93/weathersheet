import React, { useEffect } from "react";
import { gsap } from "gsap";
import WeatherIcon from "../asset/icon-weather.svg";

/**
 * Animation component handles the logo animation using GSAP.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the Animation component.
 */
const Animation = () => {
  useEffect(() => {
    // Using GSAP to animate the logo
    gsap.fromTo(
      ".logo", // Targeting elements with the class 'logo'
      { opacity: 0, x: -30 }, // Initial properties
      { opacity: 1, x: 0, duration: 2 } // Final properties and animation duration
    );
  }, []); // The empty dependency array ensures the useEffect runs only once after component mount

  return (
    <div className='logo'>
      {/* Weather Icon */}
      <img
        src={WeatherIcon}
        alt='Weather Icon'
        className='icon'
        style={{ width: "40px", height: "40px" }}
      />
      Weathersheet
    </div>
  );
};

export default Animation;
