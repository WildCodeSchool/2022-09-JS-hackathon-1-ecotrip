import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";
import logo from "./assets/logo.png";
import distance from "./utils";

function App() {
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [distanceInKm, setDistanceInKm] = useState();

  const urlDepart = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${
    import.meta.env.VITE_API_KEY
  }&name=${startingPoint}`;
  const urlArrivee = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${
    import.meta.env.VITE_API_KEY
  }&name=${destination}`;
  const [filterNameDepart, setFilterNameDepart] = useState([]);
  const [filterNameArrivee, setFilterNameArrivee] = useState([]);

  const fetchDepart = async () => {
    const data = await fetch(urlDepart);
    if (data.status === 200) {
      const coordsDepart = await data.json();
      setFilterNameDepart(coordsDepart);
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key");
    }
  };
  const fetchArrivee = async () => {
    const data = await fetch(urlArrivee);
    if (data.status === 200) {
      const coordsArrivee = await data.json();
      setFilterNameArrivee(coordsArrivee);
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key");
    }
  };

  const distance = () => {
    const radlat1 = (Math.PI * filterNameDepart.lat) / 180;
    const radlat2 = (Math.PI * filterNameArrivee.lat) / 180;
    const theta = filterNameDepart.lon - filterNameArrivee.lon;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist *= 1.609344;
    // setPage("results"); //
    console.warn(dist);
  };

  useEffect(() => {
    if (filterNameArrivee && filterNameDepart) {
      setDistanceInKm(distance(filterNameArrivee, filterNameDepart));
    }
  }, [filterNameDepart, filterNameArrivee]);

  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              logo={logo}
              startingPoint={startingPoint}
              setStartingPoint={setStartingPoint}
              destination={destination}
              setDestination={setDestination}
              distance={distance}
            />
          }
        />
        <Route path="/about" element={<p>hello from /about</p>} />
      </Routes>
    </div>
  );
}

export default App;
