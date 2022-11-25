import React from "react";
import PropTypes from "prop-types";
import carGreenLogo from "../assets/voiture-green.png";
import carLogo from "../assets/voiture.png";
import trainLogo from "../assets/train.png";
import planeLogo from "../assets/avion.png";
import greenGauge from "../assets/greenGauge.png";
import yellowGauge from "../assets/yellowGauge.png";
import orangeGauge from "../assets/orangeGauge.png";
import redGauge from "../assets/redGauge.png";

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
    <main className="h-screen w-screen bg-blue-300 flex flex-col items-start justify-evenly">
      <h1 className="text-center text-4xl text-white font-bold">
        {distanceInKm.toFixed(2)} km between{" "}
        {`${startingPoint.charAt(0).toUpperCase()}${startingPoint.slice(1)}`}{" "}
        and {`${destination.charAt(0).toUpperCase()}${destination.slice(1)}`}
      </h1>
      <div className="flex flex-col justify-evenly items-center">
        <div className="flex gap-4 items-center">
          <img src={trainLogo} alt="trainLogo" className="w-10 h-12" />
          <img
            src={greenGauge}
            alt="greenGauge"
            className="h-10 w-2/4 rounded-full"
          />
        </div>
        <p className="text-lg font-bold">{train.toFixed(2)} kg CO2e</p>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <div className="flex gap-4 items-center">
          <img src={carGreenLogo} alt="carGreenLogo" className="w-10 h-12" />
          <img
            src={yellowGauge}
            alt="yellowGauge"
            className="h-10 rounded-full"
          />
        </div>
        <p className="text-lg font-bold">{elecCar.toFixed(2)} kg CO2e</p>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <div className="flex gap-4 items-center">
          <img src={carLogo} alt="carLogo" className="w-10 h-12" />
          <img
            src={orangeGauge}
            alt="orangeGauge"
            className="h-10 rounded-full"
          />
        </div>
        <p className="text-lg font-bold">{carboncar.toFixed(2)} kg CO2e</p>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <div className="flex gap-4 items-center">
          <img src={planeLogo} alt="planeLogo" className="w-10 h-12" />
          <img
            src={redGauge}
            alt="redGauge"
            className="h-10 w-3/4 rounded-full"
          />
        </div>
        <p className="text-lg font-bold">{avion.toFixed(2)} kg CO2e</p>
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
