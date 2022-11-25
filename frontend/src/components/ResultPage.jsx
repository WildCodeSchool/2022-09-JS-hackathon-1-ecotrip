import React from "react";
import PropTypes from "prop-types";

function ResultPage({ distanceInKm, startingPoint, destination }) {
  // console.warn(dist, "km");
  // const elecCar = dist * 0.1;
  // console.warn(Math.floor(elecCar), "kg CO2e pour une voiture électrique");
  // const carboncar = dist * 0.21;
  // console.warn(Math.floor(carboncar), "kg CO2e pour une voiture essence");
  // const train = dist * 0.0023;
  // console.warn(train, "kg CO2e pour un trajet en TGV");
  // const avion = dist * 0.23;
  // console.warn(avion, "kg CO2e pour un trajet en avion");
  return (
    <main className="h-screen w-screen bg-blue-300 flex flex-col items-center justify-evenly">
      <h1 className="text-4xl text-white font-bold">
        {Math.floor(distanceInKm)} km between {startingPoint} and {destination}
      </h1>
    </main>
  );
}

ResultPage.propTypes = {
  distanceInKm: PropTypes.number.isRequired,
  startingPoint: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ResultPage;
