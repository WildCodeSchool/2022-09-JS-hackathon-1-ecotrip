import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";
import logo from "./assets/logo.png";
import { distance, fetchData } from "./utils";

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

  const handleClick = async () => {
    await fetchData(urlDepart, setFilterNameDepart);
    await fetchData(urlArrivee, setFilterNameArrivee);
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
