import React from "react";
import PropTypes from "prop-types";

function ResultPage({ distanceInKm, startingPoint, destination }) {
  return (
    <main className="h-screen w-screen bg-blue-300 flex flex-col items-center justify-evenly">
      <h1 className="text-4xl text-white font-bold">
        {distanceInKm} km between {startingPoint} and {destination}
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
