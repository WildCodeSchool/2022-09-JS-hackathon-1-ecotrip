import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HomePage({
  logo,
  startingPoint,
  setStartingPoint,
  destination,
  setDestination,
  handleClick,
}) {
  return (
    <main className="h-screen w-screen bg-blue-300 flex flex-col items-center justify-evenly">
      <img src={logo} alt="logo" className="w-1/2 h-1/3 object-contain mt-10" />
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 text-center shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-10"
        placeholder="Choose your starting point..."
        type="text"
        name="search"
        value={startingPoint}
        onChange={(e) => setStartingPoint(e.target.value)}
      />
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 text-center shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-10"
        placeholder="Choose your destination..."
        type="text"
        name="search"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      {/* On a peut etre cassé le distance, bisous <3 */}
      <Link
        to="/about"
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded my-10"
        onClick={() => handleClick()}
      >
        Be Eco-Friendly
      </Link>
    </main>
  );
}

HomePage.propTypes = {
  logo: PropTypes.string.isRequired,
  startingPoint: PropTypes.string.isRequired,
  setStartingPoint: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  setDestination: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default HomePage;
