import React from "react";
import PropTypes from "prop-types";

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
      <h1 className="text-4xl text-white font-bold">
        {distanceInKm.toFixed(2)} km between {startingPoint} and {destination}
      </h1>
      <p>{elecCar.toFixed(2)} kg CO2e pour une voiture électrique</p>
      <p>{carboncar.toFixed(2)} kg CO2e pour une voiture essence</p>
      <p>{train.toFixed(2)} kg CO2e pour un trajet en TGV</p>
      <p>{avion.toFixed(2)} kg CO2e pour un trajet en avion</p>
    </main>
  );
}

ResultPage.propTypes = {
  distanceInKm: PropTypes.number.isRequired,
  startingPoint: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ResultPage;
