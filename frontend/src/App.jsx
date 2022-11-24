import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";
import logo from "./assets/logo.png";
import distance from "./utils";

function App() {
  const [page, setPage] = useState("home");
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

  const handleClick = async () => {
    await fetchDepart();
    await fetchArrivee();
    setPage("result");
  };

  useEffect(() => {
    if (filterNameArrivee && filterNameDepart) {
      setDistanceInKm(distance(filterNameArrivee, filterNameDepart));
    }
  }, [filterNameDepart, filterNameArrivee]);

  return (
    <div className="App">
      {page === "home" && (
        <HomePage
          logo={logo}
          startingPoint={startingPoint}
          setStartingPoint={setStartingPoint}
          destination={destination}
          setDestination={setDestination}
          distance={distance}
          handleClick={handleClick}
        />
      )}
      {page === "result" && (
        <ResultPage
          distanceInKm={distanceInKm}
          startingPoint={startingPoint}
          destination={destination}
        />
      )}
    </div>
  );
}

export default App;
