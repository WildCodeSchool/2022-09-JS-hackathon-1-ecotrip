import React from "react";
import PropTypes from "prop-types";
import carGreenLogo from "../assets/voiture-green.png";
import carLogo from "../assets/voiture.png";
import trainLogo from "../assets/train.png";
import planeLogo from "../assets/avion.png";

function ResultPage({ distanceInKm, startingPoint, destination }) {
  // console.warn(dist, "km");
  const elecCar = distanceInKm * 0.1;
  // console.warn(Math.floor(elecCar), "kg CO2e pour une voiture électrique");
  const carboncar = distanceInKm * 0.21;
  // console.warn(Math.floor(carboncar), "kg CO2e pour une voiture essence");
  const train = distanceInKm * 0.0023;
  // console.warn(train, "kg CO2e pour un trajet en TGV");
  const avion = distanceInKm * 0.23;
  // console.warn(avion, "kg CO2e pour un trajet en avion");
  return (
    <main className="h-screen w-screen bg-blue-300 flex flex-col items-center justify-evenly">
      <h1 className="text-center text-4xl text-white font-bold">
        {distanceInKm.toFixed(2)} km between{" "}
        {`${startingPoint.charAt(0).toUpperCase()}${startingPoint.slice(1)}`}{" "}
        and {`${destination.charAt(0).toUpperCase()}${destination.slice(1)}`}
      </h1>
      <div className="flex justify-evenly items-center w-3/2">
        <img src={carGreenLogo} alt="carGreenLogo" className="w-8 h-8" />
        <p>{elecCar.toFixed(2)} kg CO2e pour une voiture électrique</p>
      </div>
      <div className="flex justify-evenly items-center w-3/2">
        <img src={carLogo} alt="carLogo" className="w-8 h-8" />
        <p>{carboncar.toFixed(2)} kg CO2e pour une voiture essence</p>
      </div>
      <div className="flex justify-evenly items-center w-3/2">
        <img src={trainLogo} alt="trainLogo" className="w-8 h-8" />
        <p>{train.toFixed(2)} kg CO2e pour un trajet en TGV</p>
      </div>
      <div className="flex justify-evenly items-center w-3/2">
        <img src={planeLogo} alt="planeLogo" className="w-8 h-8" />
        <p>{avion.toFixed(2)} kg CO2e pour un trajet en avion</p>
      </div>
    </main>
  );
}

ResultPage.propTypes = {
  distanceInKm: PropTypes.number.isRequired,
  startingPoint: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ResultPage;
